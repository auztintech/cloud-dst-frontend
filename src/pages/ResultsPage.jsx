import React from 'react';
import { calculateCost } from '../utils/scoring.js';

function ResultsPage({ answers, score }) {
  const getScoreColor = (s) => {
    if (s >= 75) return '#10b981';
    if (s >= 50) return '#f59e0b';
    return '#ef4444';
  };

  const getScoreLabel = (s) => {
    if (s >= 75) return 'Excellent';
    if (s >= 50) return 'Good';
    return 'Needs Work';
  };

  const totalServices = Object.values(answers.selectedServices).reduce(
    (acc, arr) => acc + arr.length, 0
  );
  const cost = calculateCost(answers);

  return (
    <div style={{ animation: 'fadeIn 0.5s ease' }}>
      {/* Score Circle */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          width: '120px',
          height: '120px',
          margin: '0 auto 20px',
          borderRadius: '50%',
          background: `conic-gradient(${getScoreColor(score)} ${score * 3.6}deg, #f0f0f0 0deg)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '32px', fontWeight: '800', color: getScoreColor(score) }}>
              {score}
            </div>
            <div style={{ fontSize: '12px', color: '#888' }}>/ 100</div>
          </div>
        </div>
        
        <h2 style={{ margin: '0 0 8px', fontSize: '24px' }}>
          {answers.businessName || 'Your Business'}
        </h2>
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '20px',
          background: `${getScoreColor(score)}20`,
          color: getScoreColor(score),
          fontWeight: '600',
          fontSize: '14px'
        }}>
          {getScoreLabel(score)} Readiness
        </div>
      </div>

      {/* Summary */}
      <div style={{
        background: '#fafafa',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '24px'
      }}>
        <SummaryRow label="Industry" value={answers.industry} />
        <SummaryRow label="Employees" value={answers.employees} />
        <SummaryRow label="Location" value={`${answers.state || 'Not specified'}`} />
        <SummaryRow label="Cloud Experience" value={answers.yearsUsage || 'Not specified'} />
        <SummaryRow label="Monthly Budget" value={`₦${answers.monthlyBudget.toLocaleString()}`} />
        <SummaryRow label="Services Using" value={`${totalServices} platforms`} />
      </div>

      {/* Recommendations */}
      <div style={{ marginTop: '24px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: '700' }}>
          Key Recommendations
        </h3>
        {score < 50 && (
          <RecommendationCard
            icon="🎯"
            title="Start with managed SaaS"
            desc="Focus on low-maintenance cloud services before complex infrastructure"
          />
        )}
        {score >= 50 && score < 75 && (
          <RecommendationCard
            icon="📈"
            title="Optimize your setup"
            desc="Audit existing services and consolidate vendors"
          />
        )}
        {score >= 75 && (
          <RecommendationCard
            icon="🚀"
            title="Scale with confidence"
            desc="Ready for advanced cloud architecture"
          />
        )}
        {answers.pain.includes('cost') && (
          <RecommendationCard
            icon="💰"
            title="Implement cost controls"
            desc="Set up budgets and automated scaling"
          />
        )}
      </div>

      {/* Cost Estimate */}
      <div style={{
        marginTop: '32px',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
        borderRadius: '16px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>
          Estimated Monthly Cost
        </div>
        <div style={{ fontSize: '32px', fontWeight: '800', color: '#667eea' }}>
          ₦{cost.toLocaleString()}
        </div>
        <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
          Based on your specified requirements
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #e8e8e8'
    }}>
      <span style={{ color: '#888', fontSize: '14px' }}>{label}</span>
      <span style={{ fontWeight: '600', fontSize: '14px' }}>{value}</span>
    </div>
  );
}

function RecommendationCard({ icon, title, desc }) {
  return (
    <div style={{
      padding: '16px',
      background: 'white',
      borderRadius: '12px',
      marginBottom: '12px',
      border: '1px solid #e8e8e8',
      display: 'flex',
      gap: '12px'
    }}>
      <span style={{ fontSize: '24px' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '13px', color: '#666' }}>{desc}</div>
      </div>
    </div>
  );
}
export default ResultsPage;