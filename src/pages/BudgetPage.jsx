import React from 'react';
import { DollarSign } from 'lucide-react';
import PageContainer from '../components/PageContainer';
import Input from '../components/UI/Input';
import Slider from '../components/UI/Slider';
import Hint from '../components/Hint';

export default function BudgetPage({ answers, updateAnswer }) {
  return (
    <PageContainer icon={DollarSign} title="Monthly IT budget?">
      <Input
        type="number"
        value={answers.monthlyBudget}
        onChange={e => updateAnswer('monthlyBudget', +e.target.value)}
        placeholder="Amount in Naira"
        prefix="₦"
      />
      <Slider
        value={answers.monthlyBudget}
        onChange={val => updateAnswer('monthlyBudget', val)}
        min={10000}
        max={500000}
        step={10000}
      />
      <Hint>Include all IT expenses (software, infrastructure, support)</Hint>
    </PageContainer>
  );
}