import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";


/**
 * Expanded assessment with:
 * - years of usage
 * - state and LGA
 * - grouped service lists (business tools, storage, infra, platform, comms, security, analytics, payments)
 *
 * Mobile-first UI: single column, phone-like container handled in styles.css
 */

const SERVICE_CATEGORIES = {
  businessTools: {
    label: "Business Management & CRM",
    items: ["QuickBooks Online","Xero","Zoho Books","Salesforce","Zoho CRM","HubSpot","Odoo","SAP Business One","Microsoft Dynamics 365","FreshBooks","Wave","Sage Cloud Accounting","Mailchimp","Sendinblue","Constant Contact","Shopify","WooCommerce","Wix","Squarespace"]
  },
  storage: {
    label: "Cloud Storage & Backup",
    items: ["Google Drive","Dropbox","OneDrive","iCloud","Mega","Backblaze","Carbonite","IDrive","AWS S3","GitHub","GitLab"]
  },
  infra: {
    label: "Infrastructure (IaaS)",
    items: ["AWS","Azure","GCP","DigitalOcean","Linode","Vultr","Heroku","Render","Netlify"]
  },
  platform: {
    label: "Platform (PaaS)",
    items: ["Google App Engine","Azure App Service","AWS Elastic Beanstalk","Firebase","Supabase","Vercel"]
  },
  comms: {
    label: "Communication & Support",
    items: ["WhatsApp Business Cloud API","Twilio","Zoho Cliq","Microsoft Teams","Slack","Freshdesk","Zendesk","Intercom"]
  },
  security: {
    label: "Security & Backup Solutions",
    items: ["Cloudflare","NordLayer","Perimeter 81","AWS Backup","Azure Backup","Google Vault","Barracuda Cloud Backup"]
  },
  analytics: {
    label: "Analytics & Data",
    items: ["Google Analytics","Looker Studio","Power BI","Tableau Cloud","Zoho Analytics","Databox","AWS QuickSight","Google BigQuery"]
  },
  payments: {
    label: "Payments & Fintech",
    items: ["Paystack","Flutterwave","Stripe","PayPal","Remita","Monnify","VoguePay"]
  },
  ecommerce: {
    label: "E-commerce platforms",
    items: ["Shopify","WooCommerce","Wix","Squarespace","Magento"]
  }
};

function CheckboxGrid({items, selected, onToggle}){
  return (
    <div className="checkbox-grid" style={{marginTop:8}}>
      {items.map(it => (
        <label key={it} style={{display:'flex',alignItems:'center',gap:8}}>
          <input type="checkbox" checked={selected.includes(it)} onChange={()=>onToggle(it)} />
          <span style={{fontSize:14}}>{it}</span>
        </label>
      ))}
    </div>
  );
}

export default function Assessment(){
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [answers, setAnswers] = useState({
    businessName: '',
    industry: 'retail',
    employees: 5,
    monthlyBudget: 50000,
    onPrem: true,
    usesCloud: false,
    pain: [],
    dataSensitivity: 'medium',
    growth: 10,
    storageGB: 50,
    cdnGB: 0,
    monthlyRequests: 100000,
    yearsUsage: '0-1',
    state: '',
    lga: '',
    selectedServices: {} // { businessTools: [], storage: [], infra: [], ... }
  });

  function setService(cat, item){
    setAnswers(prev => {
      const prevArr = prev.selectedServices[cat] || [];
      const nextSet = new Set(prevArr);
      if (nextSet.has(item)) nextSet.delete(item); else nextSet.add(item);
      return { ...prev, selectedServices: { ...prev.selectedServices, [cat]: Array.from(nextSet) } };
    });
  }

  function togglePain(item){
    setAnswers(prev => {
      const set = new Set(prev.pain);
      if (set.has(item)) set.delete(item); else set.add(item);
      return {...prev, pain: Array.from(set)};
    });
  }

  function next(){
    if (step === totalSteps){
      navigate('/results', { state: { answers }});
    } else setStep(s => s+1);
  }
  function prev(){ if (step>1) setStep(s=>s-1); }

  const progress = Math.round((step/totalSteps)*100);

  return (
    <div className="phone-frame">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
          <div>
            <div className="header-title">Cloud adoption assessment</div>
            <div className="small">Step {step}/{totalSteps}</div>
          </div>
          <div style={{textAlign:'right'}} className="small">Progress {progress}%</div>
        </div>

        <ProgressBar value={progress} />

        {/* Step content */}
        <div style={{marginTop:8}}>
          {step === 1 && (
            <div>
              <div className="form-row">
                <label>Business name</label>
                <input type="text" value={answers.businessName} onChange={e=>setAnswers({...answers,businessName:e.target.value})} placeholder="e.g., Mama's Groceries" />
              </div>
              <div className="form-row row">
                <div style={{flex:1}}>
                  <label>Industry</label>
                  <select value={answers.industry} onChange={e=>setAnswers({...answers,industry:e.target.value})}>
                    <option value="retail">Retail</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="services">Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div style={{width:110}}>
                  <label>Employees</label>
                  <input type="number" min="1" value={answers.employees} onChange={e=>setAnswers({...answers,employees:+e.target.value})} />
                </div>
              </div>

              <div className="form-row">
                <label>Years using cloud tools</label>
                <div style={{display:'flex',gap:8}}>
                  <label><input type="radio" name="yrs" checked={answers.yearsUsage==='0-1'} onChange={()=>setAnswers({...answers,yearsUsage:'0-1'})}/> 0-1</label>
                  <label><input type="radio" name="yrs" checked={answers.yearsUsage==='1-3'} onChange={()=>setAnswers({...answers,yearsUsage:'1-3'})}/> 1-3</label>
                  <label><input type="radio" name="yrs" checked={answers.yearsUsage==='3-5'} onChange={()=>setAnswers({...answers,yearsUsage:'3-5'})}/> 3-5</label>
                  <label><input type="radio" name="yrs" checked={answers.yearsUsage==='5+'} onChange={()=>setAnswers({...answers,yearsUsage:'5+'})}/> 5+</label>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="form-row row">
                <div style={{flex:1}}>
                  <label>State</label>
                  <input type="text" value={answers.state} onChange={e=>setAnswers({...answers,state:e.target.value})} placeholder="e.g., Lagos" />
                </div>
                <div style={{width:150}}>
                  <label>LGA</label>
                  <input type="text" value={answers.lga} onChange={e=>setAnswers({...answers,lga:e.target.value})} placeholder="e.g., Ikeja" />
                </div>
              </div>

              <div className="form-row">
                <label>Monthly IT budget (₦)</label>
                <input type="number" value={answers.monthlyBudget} onChange={e=>setAnswers({...answers,monthlyBudget:+e.target.value})} />
              </div>

              <div className="form-row row">
                <div>
                  <label><input type="checkbox" checked={answers.onPrem} onChange={e=>setAnswers({...answers,onPrem:e.target.checked})} /> We run servers on-premise</label>
                </div>
                <div>
                  <label><input type="checkbox" checked={answers.usesCloud} onChange={e=>setAnswers({...answers,usesCloud:e.target.checked})} /> We already use cloud services</label>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="form-row">
                <label>Main pain points (select all)</label>
                <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                  <label><input type="checkbox" checked={answers.pain.includes('cost')} onChange={()=>togglePain('cost')} /> Cost</label>
                  <label><input type="checkbox" checked={answers.pain.includes('backup')} onChange={()=>togglePain('backup')} /> Backup</label>
                  <label><input type="checkbox" checked={answers.pain.includes('uptime')} onChange={()=>togglePain('uptime')} /> Uptime</label>
                  <label><input type="checkbox" checked={answers.pain.includes('security')} onChange={()=>togglePain('security')} /> Security</label>
                </div>
              </div>

              <div className="form-row row">
                <div style={{flex:1}}>
                  <label>Data sensitivity</label>
                  <select value={answers.dataSensitivity} onChange={e=>setAnswers({...answers,dataSensitivity:e.target.value})}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div style={{width:120}}>
                  <label>Growth target (%)</label>
                  <input type="number" value={answers.growth} onChange={e=>setAnswers({...answers,growth:+e.target.value})} />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="form-row">
                <label>Which services do you use? (tick those that apply)</label>
                {Object.entries(SERVICE_CATEGORIES).map(([key, cat])=>(
                  <div className="card" key={key} style={{marginBottom:10}}>
                    <div style={{fontWeight:700, marginBottom:8}}>{cat.label}</div>
                    <CheckboxGrid
                      items={cat.items}
                      selected={answers.selectedServices[key]||[]}
                      onToggle={(it)=>setService(key, it)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <div className="form-row">
                <label>Estimated storage to move to cloud (GB)</label>
                <input type="number" value={answers.storageGB} onChange={e=>setAnswers({...answers,storageGB:+e.target.value})} />
              </div>
              <div className="form-row row">
                <div style={{flex:1}}>
                  <label>Estimated monthly CDN transfer (GB)</label>
                  <input type="number" value={answers.cdnGB} onChange={e=>setAnswers({...answers,cdnGB:+e.target.value})} />
                </div>
                <div style={{width:160}}>
                  <label>Monthly serverless invocations</label>
                  <input type="number" value={answers.monthlyRequests} onChange={e=>setAnswers({...answers,monthlyRequests:+e.target.value})} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* navigation */}
        <div style={{display:'flex',justifyContent:'space-between',gap:8,marginTop:12}}>
          <button className="ghost" onClick={prev} disabled={step===1} style={{opacity: step===1 ? 0.5:1}}>Back</button>
          <div style={{display:'flex',gap:8}}>
            <button className="button" onClick={next}>{step === totalSteps ? 'See results' : 'Next'}</button>
          </div>
        </div>

        <div className="hint">Tip: Select specific SaaS and tools you already use — recommendations will be tailored to them.</div>
      </div>
    </div>
  );
}

