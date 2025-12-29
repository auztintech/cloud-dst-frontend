import React from 'react';
import { Activity } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard } from '../components/UI/Cards';

export default function YearsUsagePage({ answers, updateAnswer }) {
  const options = [
    { value: '0-1', label: 'Less than 1 year', desc: 'Just getting started' },
    { value: '1-3', label: '1-3 years', desc: 'Early adopter' },
    { value: '3-5', label: '3-5 years', desc: 'Experienced user' },
    { value: '5+', label: '5+ years', desc: 'Cloud veteran' }
  ];

  return (
    <PageContainer icon={Activity} title="How long has your business used any cloud services?">
      {options.map(opt => (
        <SelectCard
          key={opt.value}
          selected={answers.yearsUsage === opt.value}
          onClick={() => updateAnswer('yearsUsage', opt.value)}
        >
          <div>
            <div style={{ fontWeight: '600', fontSize: '15px' }}>{opt.label}</div>
            <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{opt.desc}</div>
          </div>
        </SelectCard>
      ))}
    </PageContainer>
  );
}