import React from 'react';
import { Shield } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { OptionCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function CompliancePage({ answers, toggleArrayItem }) {
  const standards = [
    { value: 'gdpr', label: 'GDPR', icon: '🇪🇺' },
    { value: 'ndpr', label: 'NDPR', icon: '🇳🇬' },
    { value: 'pci', label: 'PCI DSS', icon: '💳' },
    { value: 'hipaa', label: 'HIPAA', icon: '🏥' },
    { value: 'iso', label: 'ISO 27001', icon: '📋' },
    { value: 'sox', label: 'SOX', icon: '📊' }
  ];

  return (
    <PageContainer icon={Shield} title="Compliance requirements?">
      <Hint style={{ marginBottom: '16px' }}>Select all that apply (or skip if none)</Hint>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {standards.map(std => (
          <OptionCard
            key={std.value}
            selected={(answers.compliance || []).includes(std.value)}
            onClick={() => toggleArrayItem('compliance', std.value)}
          >
            <span style={{ fontSize: '28px', marginBottom: '8px' }}>{std.icon}</span>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{std.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}