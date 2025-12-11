import React from 'react';
import { Lock } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard } from '../components/UI/Cards';

export default function DataSensitivityPage({ answers, updateAnswer }) {
  const levels = [
    { value: 'low', label: 'Low', desc: 'Public information', icon: '🟢' },
    { value: 'medium', label: 'Medium', desc: 'Internal data', icon: '🟡' },
    { value: 'high', label: 'High', desc: 'PII, financial data', icon: '🔴' }
  ];

  return (
    <PageContainer icon={Lock} title="Data sensitivity level?">
      {levels.map(level => (
        <SelectCard
          key={level.value}
          selected={answers.dataSensitivity === level.value}
          onClick={() => updateAnswer('dataSensitivity', level.value)}
        >
          <span style={{ fontSize: '24px', marginRight: '12px' }}>{level.icon}</span>
          <div>
            <div style={{ fontWeight: '600', fontSize: '15px' }}>{level.label}</div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{level.desc}</div>
          </div>
        </SelectCard>
      ))}
    </PageContainer>
  );
}