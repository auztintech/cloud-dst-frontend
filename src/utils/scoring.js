

export function calculateScore(answers) {
  let score = 45;
  
  // Employees scoring
  if (answers.employees <= 5) score += 2;
  else if (answers.employees <= 20) score += 8;
  else if (answers.employees <= 50) score += 14;
  else score += 20;

  // Years of cloud usage
  if (answers.yearsUsage === '0-1') score += 0;
  else if (answers.yearsUsage === '1-3') score += 6;
  else if (answers.yearsUsage === '3-5') score += 10;
  else if (answers.yearsUsage === '5+') score += 14;

  // Cloud adoption indicators
  if (answers.usesCloud) score += 8;
  if (!answers.onPrem) score += 6;

  // Service adoption count
  const serviceCount = Object.values(answers.selectedServices).reduce(
    (acc, arr) => acc + arr.length, 0
  );
  if (serviceCount >= 10) score += 15;
  else if (serviceCount >= 5) score += 8;
  else if (serviceCount > 0) score += 3;

  // Pain points (negative impact)
  if (answers.pain.includes('cost')) score -= 5;
  if (answers.pain.includes('backup')) score -= 3;
  
  // Data sensitivity
  if (answers.dataSensitivity === 'high') score -= 4;
  
  // Growth potential
  if (answers.growth > 50) score += 8;

  return Math.max(0, Math.min(100, Math.round(score)));
}

export function calculateCost(answers) {
  const db = answers.usesCloud ? 12000 : 0;
  const storage = (answers.storageGB || 0) * 2;
  const cdn = (answers.cdnGB || 0) * 3;
  const requests = (answers.monthlyRequests || 0) * 0.00005;
  return Math.round(db + storage + cdn + requests);
}

