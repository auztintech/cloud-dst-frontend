import React from 'react';
import { Globe } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Input from '../components/UI/Input';
import Hint from '../components/Hint';

export default function LocationPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Globe} title="Where are you located?">
      <Input
        value={answers.state}
        onChange={e => updateAnswer('state', e.target.value)}
        placeholder="State (e.g., Lagos)"
        style={{ marginBottom: '12px' }}
      />
      <Input
        value={answers.lga}
        onChange={e => updateAnswer('lga', e.target.value)}
        placeholder="LGA (e.g., Ikeja)"
      />
      <Hint>Helps us suggest local cloud partners</Hint>
    </PageContainer>
  );
}