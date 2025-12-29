import React from 'react';
import { Check, Cloud, Server, Shield, Database, Zap, Globe, Users, Building2, TrendingUp, DollarSign, Lock, BarChart3, CreditCard, Package, Mail, MessageSquare, FileText, HardDrive, Activity } from 'lucide-react';
import PageContainer from '../components/PageContainer.jsx';
import Hint from '../components/Hint.jsx';
import { ServiceCard } from "../components/UI/Cards";
import { ICON_MAP } from '../data/serviceCategories';
export default function ServicePage({ service, answers, toggleService }) {
  const Icon = ICON_MAP[service.icon];
  const selected = answers.selectedServices[service.id] || [];

  return (
    <PageContainer icon={Icon} title={service.title}>
      <Hint style={{ marginBottom: '16px' }}>Select all that apply</Hint>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {service.items.map(item => (
          <ServiceCard
            key={item}
            selected={selected.includes(item)}
            onClick={() => toggleService(service.id, item)}
          >
            {item}
            {selected.includes(item) && (
              <Check size={18} style={{ marginLeft: 'auto', color: '#10b981' }} />
            )}
          </ServiceCard>
        ))}
      </div>
    </PageContainer>
  );
}

