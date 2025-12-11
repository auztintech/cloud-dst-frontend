import React from 'react';
import { Zap } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Slider from '../components/UI/Slider';
import Hint from '../components/Hint';

export default function CDNPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Zap} title="Monthly CDN transfer?">
      <div style={{
        fontSize: '40px',
        fontWeight: '800',
        color: '#667eea',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        {answers.cdnGB} GB
      </div>
      <Slider
        value={answers.cdnGB}
        onChange={val => updateAnswer('cdnGB', val)}
        min={0}
        max={5000}
        step={10}
      />
      <Hint>For static content, images, videos</Hint>
    </PageContainer>
  );
}
