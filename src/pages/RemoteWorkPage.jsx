import React from 'react';
import { Users } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Slider from '../components/UI/Slider';
import Hint from '../components/Hint';

export default function RemoteWorkPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Users} title="Remote work percentage?">
      <div style={{
        fontSize: '48px',
        fontWeight: '800',
        color: '#667eea',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        {answers.remoteWork}%
      </div>
      <Slider
        value={answers.remoteWork}
        onChange={val => updateAnswer('remoteWork', val)}
        min={0}
        max={100}
        step={5}
      />
      <Hint>Helps determine collaboration and VPN needs</Hint>
    </PageContainer>
  );
}

