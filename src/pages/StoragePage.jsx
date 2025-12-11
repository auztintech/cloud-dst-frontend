import React from 'react';
import { HardDrive } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Slider from '../components/UI/Slider';
import Hint from '../components/Hint';

export default function StoragePage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={HardDrive} title="Cloud storage needed?">
      <div style={{
        fontSize: '40px',
        fontWeight: '800',
        color: '#667eea',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        {answers.storageGB} GB
      </div>
      <Slider
        value={answers.storageGB}
        onChange={val => updateAnswer('storageGB', val)}
        min={10}
        max={10000}
        step={10}
        showMarkers
      />
      <Hint>For files, backups, and databases</Hint>
    </PageContainer>
  );
}