import React from 'react';
import { Cloud } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard } from '../components/UI/Cards';

export default function CloudProviderPage({ answers, updateAnswer }) {
  const providers = [
    { value: 'none', label: 'Not using any', icon: '❌' },
    { value: 'aws', label: 'Amazon Web Services', icon: '☁️' },
    { value: 'azure', label: 'Microsoft Azure', icon: '🔷' },
    { value: 'gcp', label: 'Google Cloud', icon: '🌐' },
    { value: 'digitalocean', label: 'DigitalOcean', icon: '🐋' },
    { value: 'other', label: 'Other providers', icon: '📦' }
  ];

  return (
    <PageContainer icon={Cloud} title="Primary cloud provider?">
      {providers.map(prov => (
        <SelectCard
          key={prov.value}
          selected={answers.cloudProvider === prov.value}
          onClick={() => updateAnswer('cloudProvider', prov.value)}
        >
          <span style={{ fontSize: '24px', marginRight: '12px' }}>{prov.icon}</span>
          <span style={{ fontWeight: '600', fontSize: '15px' }}>{prov.label}</span>
        </SelectCard>
      ))}
    </PageContainer>
  );
}