import React from 'react';
import { Users } from 'lucide-react';
import PageContainer from '../components/PageContainer.jsx';
import { OptionCard } from '../components/UI/Cards';
function EmployeesPage({ answers, updateAnswer }) {
  const ranges = [
    { value: 1, label: '1-5', icon: '👤' },
    { value: 10, label: '6-20', icon: '👥' },
    { value: 35, label: '21-50', icon: '👨‍👩‍👧‍👦' },
    { value: 75, label: '51-100', icon: '🏢' },
    { value: 150, label: '100+', icon: '🏭' }
  ];

  return (
    <PageContainer icon={Users} title="How many employees?">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px'
      }}>
        {ranges.map(range => (
          <OptionCard
            key={range.value}
            selected={answers.employees === range.value}
            onClick={() => updateAnswer('employees', range.value)}
          >
            <span style={{ fontSize: '32px', marginBottom: '8px' }}>{range.icon}</span>
            <span style={{ fontSize: '15px', fontWeight: '600' }}>{range.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}

export default EmployeesPage;
