import React from 'react';
import { Activity } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { OptionCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function PainPointsPage({ answers, toggleArrayItem }) {
  const pains = [
    { value: 'cost', label: 'High costs', icon: '💸' },
    { value: 'backup', label: 'Backup issues', icon: '💾' },
    { value: 'uptime', label: 'Downtime', icon: '⚠️' },
    { value: 'security', label: 'Security', icon: '🔒' },
    { value: 'performance', label: 'Performance', icon: '🐌' },
    { value: 'complexity', label: 'Too complex', icon: '🤯' }
  ];

  return (
    <PageContainer icon={Activity} title="What are your pain points?">
      <Hint style={{ marginBottom: '16px' }}>Select all that apply</Hint>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {pains.map(pain => (
          <OptionCard
            key={pain.value}
            selected={(answers.pain || []).includes(pain.value)}
            onClick={() => toggleArrayItem('pain', pain.value)}
          >
            <span style={{ fontSize: '28px', marginBottom: '6px' }}>{pain.icon}</span>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{pain.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}
