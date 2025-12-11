import React from 'react';
import { Activity } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Slider from '../components/UI/Slider';
import Hint from '../components/Hint';

export default function RequestsPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Activity} title="Monthly API requests?">
      <div style={{
        fontSize: '36px',
        fontWeight: '800',
        color: '#667eea',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        {(answers.monthlyRequests / 1000).toFixed(0)}K
      </div>
      <Slider
        value={answers.monthlyRequests}
        onChange={val => updateAnswer('monthlyRequests', val)}
        min={0}
        max={10000000}
        step={100000}
      />
      <Hint>Function invocations or API calls</Hint>
    </PageContainer>
  );
}
