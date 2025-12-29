import React from 'react';
import { 
  Activity,
  DollarSign, // High costs
  Save, // Backup issues
  AlertTriangle, // Downtime
  Shield, // Security
  Gauge, // Performance
  Brain // Too complex
} from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { OptionCard } from '../components/UI/Cards';
import Hint from '../components/Hint';

export default function PainPointsPage({ answers, toggleArrayItem }) {
  const pains = [
    { value: 'cost', label: 'High costs', icon: <DollarSign size={28} /> },
    { value: 'backup', label: 'Backup issues', icon: <Save size={28} /> },
    { value: 'uptime', label: 'Downtime', icon: <AlertTriangle size={28} /> },
    { value: 'security', label: 'Security', icon: <Shield size={28} /> },
    { value: 'performance', label: 'Performance', icon: <Gauge size={28} /> },
    { value: 'complexity', label: 'Too complex', icon: <Brain size={28} /> }
  ];

  return (
    <PageContainer icon={Activity} title="What are your top 1–2 business problems that cloud could help with?">
      <Hint style={{ marginBottom: '16px' }}>Select all that apply</Hint>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {pains.map(pain => (
          <OptionCard
            key={pain.value}
            selected={(answers.pain || []).includes(pain.value)}
            onClick={() => toggleArrayItem('pain', pain.value)}
          >
            <span style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {pain.icon}
            </span>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{pain.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}