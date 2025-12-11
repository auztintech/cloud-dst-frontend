import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { computeScore, generateRecommendations } from '../utils/scoring';
import { estimateCost } from '../utils/estimator';
import Gauge from '../components/Gauge';
import RecommendationCard from '../components/RecommendationCard';
import html2pdf from 'html2pdf.js';

function ServiceList({selectedServices}){
  if (!selectedServices) return null;
  return (
    <div style={{marginTop:8}}>
      {Object.entries(selectedServices).map(([cat, arr])=>{
        if (!arr || arr.length===0) return null;
        return (
          <div key={cat} style={{marginBottom:8}}>
            <div style={{fontWeight:700, fontSize:13, marginBottom:6}}>{cat}</div>
            <div className="small">{arr.join(' • ')}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function Results(){
  const loc = useLocation();
  const navigate = useNavigate();
  const answers = (loc.state && loc.state.answers) || null;
  const [score, setScore] = useState(0);
  const [recs, setRecs] = useState([]);
  const [cost, setCost] = useState(null);

  useEffect(()=>{
    if (!answers) { navigate('/'); return; }
    const s = computeScore(answers);
    setScore(s);
    setRecs(generateRecommendations(answers));
    setCost(estimateCost({
      db: true,
      storageGB: answers.storageGB,
      cdnGB: answers.cdnGB,
      monthlyRequests: answers.monthlyRequests
    }));
    // eslint-disable-next-line
  },[]);

  if (!answers) return null;

  function exportPDF(){
    const element = document.getElementById('results-pdf');
    const opt = {
      margin:       0.4,
      filename:     `${answers.businessName || 'cloud-plan'}-cloud-plan.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }

  return (
    <div className="phone-frame">
      <div className="container" id="results-pdf">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
          <div>
            <div className="header-title">Cloud plan — {answers.businessName || 'Your business'}</div>
            <div className="small">{answers.industry} • {answers.employees} employees • {answers.state || 'State not set'}</div>
          </div>
          <div className="meta-pill small">Score {score}%</div>
        </div>

        <div className="card">
          <div style={{display:'flex',gap:12}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:700}}>Readiness summary</div>
              <div className="small" style={{marginTop:6}}>Years using cloud: {answers.yearsUsage} • Data sensitivity: {answers.dataSensitivity}</div>
              <div style={{marginTop:10}} className="small">Selected services (high-level):</div>
              <ServiceList selectedServices={answers.selectedServices} />
            </div>

            <div style={{width:120}}>
              <Gauge value={score} />
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{marginTop:0}}>Top recommendations</h3>
          {recs.map((r,i)=>(<RecommendationCard key={i} rec={r} />))}
        </div>

        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:700}}>Estimated monthly cost</div>
              <div className="small">Rough estimate using prototype unit rates</div>
            </div>
            <div style={{fontSize:18,fontWeight:800}}>₦{cost ? cost.total.toLocaleString() : '—'}</div>
          </div>
          <div style={{marginTop:8}} className="small">
            Managed DB: ₦{cost ? cost.db.toLocaleString() : '—'} • Storage: ₦{cost ? cost.storage.toLocaleString() : '—'} • CDN: ₦{cost ? cost.cdn.toLocaleString() : '—'}
          </div>
        </div>

        <div style={{display:'flex',gap:8,marginTop:8}}>
          <button className="button full" onClick={exportPDF}>Export plan (PDF)</button>
        </div>

        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button className="ghost" onClick={()=>navigate('/assessment')}>Back</button>
          <button className="button" onClick={()=>window.print()}>Print</button>
        </div>

        <div className="hint" style={{marginTop:12}}>Note: This prototype uses simple heuristics and local suggestions. For production, add provider pricing APIs and local partner integrations.</div>
      </div>
    </div>
  );
}
