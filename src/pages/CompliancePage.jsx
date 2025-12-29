import React from 'react';
import { Shield, Globe, Shield as NDPRIcon, CreditCard, Hospital, FileText, BarChart } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { OptionCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function CompliancePage({ answers, toggleArrayItem }) {
  const standards = [
    { value: 'gdpr', label: 'GDPR', icon: <Globe size={28} /> },
    { value: 'ndpr', label: 'NDPR', icon: <Shield size={28} /> },
    { value: 'pci', label: 'PCI DSS', icon: <CreditCard size={28} /> },
    { value: 'hipaa', label: 'HIPAA', icon: <Hospital size={28} /> },
    { value: 'iso', label: 'ISO 27001', icon: <FileText size={28} /> },
    { value: 'sox', label: 'SOX', icon: <BarChart size={28} /> }
  ];

  return (
    <PageContainer icon={Shield} title="Are there specific legal or industry rules you must follow for data?">
      <Hint style={{ marginBottom: '16px' }}>Select all that apply (or skip if none)</Hint>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {standards.map(std => (
          <OptionCard
            key={std.value}
            selected={(answers.compliance || []).includes(std.value)}
            onClick={() => toggleArrayItem('compliance', std.value)}
          >
            <span style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {std.icon}
            </span>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{std.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}