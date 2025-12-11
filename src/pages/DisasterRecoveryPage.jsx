import React from 'react';
import { Shield } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { SelectCard } from '../components/UI/Cards';

export default function DisasterRecoveryPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Shield} title="Disaster recovery plan?">
      <SelectCard
        selected={answers.disasterRecovery === true}
        onClick={() => updateAnswer('disasterRecovery', true)}
      >
        <span style={{ fontSize: '24px', marginRight: '12px' }}>✅</span>
        <div>
          <div style={{ fontWeight: '600', fontSize: '15px' }}>Yes, we have one</div>
          <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>Documented and tested</div>
        </div>
      </SelectCard>
      <SelectCard
        selected={answers.disasterRecovery === false}
        onClick={() => updateAnswer('disasterRecovery', false)}
      >
        <span style={{ fontSize: '24px', marginRight: '12px' }}>❌</span>
        <div>
          <div style={{ fontWeight: '600', fontSize: '15px' }}>No, not yet</div>
          <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>Need to create one</div>
        </div>
      </SelectCard>
    </PageContainer>
  );
}