import React from 'react';
import { Building2 } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Input from '../components/UI/Input';
import Hint from '../components/Hint';

export default function BusinessNamePage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={Building2} title="Let's start with your business">
      <Input
        value={answers.businessName}
        onChange={e => updateAnswer('businessName', e.target.value)}
        placeholder="Enter your business name"
        autoFocus
      />
      <Hint>ADOPTION OF CLOUD-BASED SOLUTIONS AND A DECISION-SUPPORT TOOL FOR ENHANCING SME PERFORMANCE IN SOUTHWEST NIGERIA</Hint>
    </PageContainer>
  );
}

