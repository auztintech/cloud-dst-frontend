import React, { useState } from 'react';
import { BarChart3, Check, X } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard, ServiceCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function AnalyticsPage({ answers, updateAnswer }) {
  // Check if user already selected analytics tools
  const hasAnalytics = answers.analyticsTools && answers.analyticsTools.length > 0;
  const [showTools, setShowTools] = useState(hasAnalytics || answers.usesAnalytics === 'yes');
  const [usesAnalytics, setUsesAnalytics] = useState(answers.usesAnalytics || '');

  const handleYesNo = (choice) => {
    setUsesAnalytics(choice);
    updateAnswer('usesAnalytics', choice);
    
    if (choice === 'yes') {
      setShowTools(true);
    } else {
      setShowTools(false);
      updateAnswer('analyticsTools', []);
    }
  };

  const toggleTool = (tool) => {
    const current = answers.analyticsTools || [];
    const updated = current.includes(tool)
      ? current.filter(t => t !== tool)
      : [...current, tool];
    updateAnswer('analyticsTools', updated);
  };

  const tools = [
    'Google Analytics',
    'Power BI',
    'Tableau',
    'Looker Studio',
    'Zoho Analytics',
    'Mixpanel',
    'Amplitude',
    'Other'
  ];

  return (
    <PageContainer icon={BarChart3} title="Do you use any analytics or business intelligence tools?">
      {/* Yes/No Question */}
      {!showTools && (
        <div>
          <Hint style={{ marginBottom: '16px' }}>
            Analytics tools help you understand your business data, customer behavior, and performance metrics.
          </Hint>

          <SelectCard
            selected={usesAnalytics === 'yes'}
            onClick={() => handleYesNo('yes')}
          >
            <span style={{ 
              marginRight: '12px', 
              display: 'flex', 
              alignItems: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#dcfce7',
              justifyContent: 'center'
            }}>
              <Check size={20} color="#10b981" />
            </span>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>Yes, we use analytics tools</span>
          </SelectCard>

          <SelectCard
            selected={usesAnalytics === 'no'}
            onClick={() => handleYesNo('no')}
          >
            <span style={{ 
              marginRight: '12px', 
              display: 'flex', 
              alignItems: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#fee2e2',
              justifyContent: 'center'
            }}>
              <X size={20} color="#ef4444" />
            </span>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>No, not yet</span>
          </SelectCard>
        </div>
      )}

      {/* Tools Selection (shown only if Yes) */}
      {showTools && (
        <div>
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '16px',
            padding: '12px',
            background: '#f0f9ff',
            borderRadius: '8px',
            borderLeft: '4px solid #667eea'
          }}>
            Which analytics or business intelligence tools do you use?
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tools.map(tool => (
              <ServiceCard
                key={tool}
                selected={(answers.analyticsTools || []).includes(tool)}
                onClick={() => toggleTool(tool)}
              >
                {tool}
                {(answers.analyticsTools || []).includes(tool) && (
                  <Check size={18} style={{ marginLeft: 'auto', color: '#10b981' }} />
                )}
              </ServiceCard>
            ))}
          </div>

          {/* Back button to change answer */}
          <button
            onClick={() => {
              setShowTools(false);
              setUsesAnalytics('');
              updateAnswer('usesAnalytics', '');
              updateAnswer('analyticsTools', []);
            }}
            style={{
              marginTop: '16px',
              padding: '10px 16px',
              background: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#666',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            ← Change answer
          </button>
        </div>
      )}
    </PageContainer>
  );
}