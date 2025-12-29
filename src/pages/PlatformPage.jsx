import React, { useState } from 'react';
import { Cloud, Check, X, HelpCircle } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard, ServiceCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function PlatformPage({ answers, updateAnswer }) {
  // Check if user already selected platforms
  const hasPlatforms = answers.platformServices && answers.platformServices.length > 0;
  const [showPlatforms, setShowPlatforms] = useState(hasPlatforms || answers.usesPaaS === 'yes');
  const [paaS, setPaaS] = useState(answers.usesPaaS || '');

  const handleYesNoDontKnow = (choice) => {
    setPaaS(choice);
    updateAnswer('usesPaaS', choice);
    
    if (choice === 'yes') {
      setShowPlatforms(true);
    } else {
      setShowPlatforms(false);
      updateAnswer('platformServices', []);
    }
  };

  const togglePlatform = (platform) => {
    const current = answers.platformServices || [];
    const updated = current.includes(platform)
      ? current.filter(p => p !== platform)
      : [...current, platform];
    updateAnswer('platformServices', updated);
  };

  const platforms = [
    'Heroku',
    'Google App Engine',
    'Azure App Service',
    'AWS Elastic Beanstalk',
    'Firebase',
    'Vercel',
    'Netlify',
    'Render',
    'Other'
  ];

  return (
    <PageContainer icon={Cloud} title="Do you use any platform services (PaaS) for building/running apps?">
      {/* Yes/No/Don't Know Question */}
      {!showPlatforms && (
        <div>
          <Hint style={{ marginBottom: '16px' }}>
            PaaS (Platform as a Service) helps you build and run applications without managing infrastructure.
          </Hint>

          <SelectCard
            selected={paaS === 'yes'}
            onClick={() => handleYesNoDontKnow('yes')}
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
            <span style={{ fontWeight: '600', fontSize: '15px' }}>Yes, we use PaaS</span>
          </SelectCard>

          <SelectCard
            selected={paaS === 'no'}
            onClick={() => handleYesNoDontKnow('no')}
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
            <span style={{ fontWeight: '600', fontSize: '15px' }}>No, we don't use PaaS</span>
          </SelectCard>

          <SelectCard
            selected={paaS === 'dontknow'}
            onClick={() => handleYesNoDontKnow('dontknow')}
          >
            <span style={{ 
              marginRight: '12px', 
              display: 'flex', 
              alignItems: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#fef3c7',
              justifyContent: 'center'
            }}>
              <HelpCircle size={20} color="#f59e0b" />
            </span>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>I don't know</span>
          </SelectCard>
        </div>
      )}

      {/* Platform Selection (shown only if Yes) */}
      {showPlatforms && (
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
            Select all platform services you currently use:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {platforms.map(platform => (
              <ServiceCard
                key={platform}
                selected={(answers.platformServices || []).includes(platform)}
                onClick={() => togglePlatform(platform)}
              >
                {platform}
                {(answers.platformServices || []).includes(platform) && (
                  <Check size={18} style={{ marginLeft: 'auto', color: '#10b981' }} />
                )}
              </ServiceCard>
            ))}
          </div>

          {/* Back button to change answer */}
          <button
            onClick={() => {
              setShowPlatforms(false);
              setPaaS('');
              updateAnswer('usesPaaS', '');
              updateAnswer('platformServices', []);
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