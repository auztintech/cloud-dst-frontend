import React from 'react';
import { 
  TrendingUp, ShoppingBag, Hotel, Briefcase, Factory, Book, 
  Hospital, Wallet, Laptop 
} from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { OptionCard } from '../components/UI/Cards';

export default function IndustryPage({ answers, updateAnswer }) {
  const industries = [
    { value: 'retail', label: 'Retail & E-commerce', icon: ShoppingBag },
    { value: 'hospitality', label: 'Hospitality', icon: Hotel },
    { value: 'services', label: 'Professional Services', icon: Briefcase },
    { value: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { value: 'education', label: 'Education', icon: Book },
    { value: 'healthcare', label: 'Healthcare', icon: Hospital },
    { value: 'finance', label: 'Finance & Fintech', icon: Wallet },
    { value: 'tech', label: 'Technology', icon: Laptop },
  ];

  return (
    <PageContainer icon={TrendingUp} title="What industry are you in?">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px'
      }}>
        {industries.map(ind => (
          <OptionCard
            key={ind.value}
            selected={answers.industry === ind.value}
            onClick={() => updateAnswer('industry', ind.value)}
          >
            <ind.icon size={28} strokeWidth={1.5} />
            <span style={{ fontSize: '14px', fontWeight: '600' }}>{ind.label}</span>
          </OptionCard>
        ))}
      </div>
    </PageContainer>
  );
}
