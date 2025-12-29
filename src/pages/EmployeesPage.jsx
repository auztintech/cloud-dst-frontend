import React from 'react';
import { Users, User, UserCheck, Building, Building2 } from 'lucide-react';
import PageContainer from '../components/PageContainer.jsx';
import { OptionCard } from '../components/UI/Cards';

function EmployeesPage({ answers, updateAnswer }) {
  const ranges = [
    { value: 1, label: '1-5', Icon: User, color: '#667eea' },
    { value: 10, label: '6-20', Icon: UserCheck, color: '#764ba2' },
    { value: 35, label: '21-50', Icon: Users, color: '#10b981' },
    { value: 75, label: '51-100', Icon: Building, color: '#f59e0b' },
    { value: 150, label: '100+', Icon: Building2, color: '#ef4444' }
  ];

  return (
    <PageContainer icon={Users} title="How many people does your business employ?">
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
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: `${range.color}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px'
            }}>
              <range.Icon size={24} color={range.color} />
            </div>
            <span style={{ fontSize: '15px', fontWeight: '600' }}>{range.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}

export default EmployeesPage;