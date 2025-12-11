import React from 'react';
import { Server } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { CheckCard } from '../components/UI/Cards';

export default function InfrastructurePage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Server} title="Current infrastructure">
      <CheckCard
        checked={answers.onPrem}
        onChange={() => updateAnswer('onPrem', !answers.onPrem)}
        title="We run on-premise servers"
        description="Physical servers in office or data center"
      />
      <CheckCard
        checked={answers.usesCloud}
        onChange={() => updateAnswer('usesCloud', !answers.usesCloud)}
        title="We already use cloud services"
        description="Using SaaS, PaaS, or IaaS solutions"
      />
    </PageContainer>
  );
}