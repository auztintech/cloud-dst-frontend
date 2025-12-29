import React from 'react';
import { Server } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import { CheckCard } from '../components/UI/Cards';

export default function InfrastructurePage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Server} title="What best describes your current IT setup?">
      <CheckCard
        checked={answers.noServ}
        onChange={() => updateAnswer('noServ', !answers.noServ)}
        title="No server / PCs only"
        description="No server, just PCs only"
      />
      <CheckCard
        checked={answers.onPrem}
        onChange={() => updateAnswer('onPrem', !answers.onPrem)}
        title="On-premise server(s)"
        description="On-premise server(s)"
      />
      <CheckCard
        checked={answers.partCloud}
        onChange={() => updateAnswer('partCloud', !answers.partCloud)}
        title="Partly cloud"
        description="Partly cloud (hybrid)"
      />
      <CheckCard
        checked={answers.fullyCloud}
        onChange={() => updateAnswer('fullyCloud', !answers.fullyCloud)}
        title="Fully cloud-hosted"
        description="Fully cloud-hosted infrastructure"
      />
      <CheckCard
        checked={answers.notsure}
        onChange={() => updateAnswer('notsure', !answers.notsure)}
        title="Don’t know"
        description="Don’t know/not sure"
      />
    </PageContainer>
  );
}