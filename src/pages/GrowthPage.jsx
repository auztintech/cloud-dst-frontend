import React from 'react';
import { TrendingUp } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Slider from '../components/UI/Slider';
import Hint from '../components/Hint';

export default function GrowthPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={TrendingUp} title="Expected growth rate?">
      <div style={{
        fontSize: '48px',
        fontWeight: '800',
        color: '#667eea',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        {answers.growth}%
      </div>
      <Slider
        value={answers.growth}
        onChange={val => updateAnswer('growth', val)}
        min={0}
        max={200}
        step={5}
      />
      <Hint>Expected growth in users, revenue, or data</Hint>
    </PageContainer>
  );
}
