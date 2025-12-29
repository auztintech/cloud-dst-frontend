import React, { useState } from 'react';
import { 
  Cloud, 
  X, 
  Cloud as AWSIcon, 
  Square as AzureIcon, 
  Globe as GCPIcon,
  Droplets as DigitalOceanIcon,
  Building2 as LocalIcon,
  Package as OtherIcon
} from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard } from '../components/UI/Cards';

export default function CloudProviderPage({ answers, updateAnswer }) {
  // Check if user already answered yes (has a provider selected)
  const hasProvider = answers.cloudProvider && answers.cloudProvider !== 'none';
  const [showProviders, setShowProviders] = useState(hasProvider);

  const handleYesNo = (hasCloud) => {
    if (hasCloud) {
      setShowProviders(true);
    } else {
      setShowProviders(false);
      updateAnswer('cloudProvider', 'none');
    }
  };

  const providers = [
    { value: 'aws', label: 'Amazon Web Services (AWS)', icon: <AWSIcon size={24} color="#FF9900" /> },
    { value: 'azure', label: 'Microsoft Azure', icon: <AzureIcon size={24} color="#0078D4" /> },
    { value: 'gcp', label: 'Google Cloud Platform', icon: <GCPIcon size={24} color="#4285F4" /> },
    { value: 'digitalocean', label: 'DigitalOcean', icon: <DigitalOceanIcon size={24} color="#0080FF" /> },
    { value: 'local', label: 'Local Nigerian Providers', icon: <LocalIcon size={24} color="#10b981" /> },
    { value: 'other', label: 'Other Cloud Providers', icon: <OtherIcon size={24} color="#8b5cf6" /> }
  ];

  return (
    <PageContainer icon={Cloud} title="Do you currently use any cloud provider?">
      {/* Yes/No Question */}
      {!showProviders && (
        <div>
          <SelectCard
            selected={showProviders === false && answers.cloudProvider === 'none'}
            onClick={() => handleYesNo(false)}
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

          <SelectCard
            selected={showProviders}
            onClick={() => handleYesNo(true)}
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
              <Cloud size={20} color="#10b981" />
            </span>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>Yes, we use cloud providers</span>
          </SelectCard>
        </div>
      )}

      {/* Provider Selection (shown only if Yes) */}
      {showProviders && (
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
            Great! Which cloud provider(s) do you use? Select your primary provider:
          </div>

          {providers.map(prov => (
            <SelectCard
              key={prov.value}
              selected={answers.cloudProvider === prov.value}
              onClick={() => updateAnswer('cloudProvider', prov.value)}
            >
              <span style={{ 
                marginRight: '12px', 
                display: 'flex', 
                alignItems: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: answers.cloudProvider === prov.value ? '#667eea15' : '#f5f5f5',
                justifyContent: 'center'
              }}>
                {prov.icon}
              </span>
              <span style={{ fontWeight: '600', fontSize: '15px' }}>{prov.label}</span>
            </SelectCard>
          ))}

          {/* Back button to change answer */}
          <button
            onClick={() => {
              setShowProviders(false);
              updateAnswer('cloudProvider', '');
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