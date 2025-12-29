import React, { useState } from 'react';
import { Package, Check, X } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard, ServiceCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function EcommercePage({ answers, updateAnswer }) {
  // Check if user already selected ecommerce platforms
  const hasEcommerce = answers.ecommercePlatforms && answers.ecommercePlatforms.length > 0;
  const [showPlatforms, setShowPlatforms] = useState(hasEcommerce || answers.usesEcommerce === 'yes');
  const [usesEcommerce, setUsesEcommerce] = useState(answers.usesEcommerce || '');

  const handleYesNo = (choice) => {
    setUsesEcommerce(choice);
    updateAnswer('usesEcommerce', choice);
    
    if (choice === 'yes') {
      setShowPlatforms(true);
    } else {
      setShowPlatforms(false);
      updateAnswer('ecommercePlatforms', []);
    }
  };

  const togglePlatform = (platform) => {
    const current = answers.ecommercePlatforms || [];
    const updated = current.includes(platform)
      ? current.filter(p => p !== platform)
      : [...current, platform];
    updateAnswer('ecommercePlatforms', updated);
  };

  const platforms = [
    'Shopify',
    'WooCommerce',
    'Custom Built',
    'Marketplace (Jumia, Konga, etc.)',
    'Wix eCommerce',
    'Squarespace Commerce',
    'Magento',
    'Other'
  ];

  return (
    <PageContainer icon={Package} title="Do you sell through an e-commerce platform?">
      {/* Yes/No Question */}
      {!showPlatforms && (
        <div>
          <Hint style={{ marginBottom: '16px' }}>
            E-commerce platforms help you sell products or services online.
          </Hint>

          <SelectCard
            selected={usesEcommerce === 'yes'}
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
            <span style={{ fontWeight: '600', fontSize: '15px' }}>Yes, we sell online</span>
          </SelectCard>

          <SelectCard
            selected={usesEcommerce === 'no'}
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
            Which e-commerce platform(s) do you use?
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {platforms.map(platform => (
              <ServiceCard
                key={platform}
                selected={(answers.ecommercePlatforms || []).includes(platform)}
                onClick={() => togglePlatform(platform)}
              >
                {platform}
                {(answers.ecommercePlatforms || []).includes(platform) && (
                  <Check size={18} style={{ marginLeft: 'auto', color: '#10b981' }} />
                )}
              </ServiceCard>
            ))}
          </div>

          {/* Back button to change answer */}
          <button
            onClick={() => {
              setShowPlatforms(false);
              setUsesEcommerce('');
              updateAnswer('usesEcommerce', '');
              updateAnswer('ecommercePlatforms', []);
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