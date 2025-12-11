// estimator.js - very simple cost model (₦)
export const UNIT_RATES = {
  managedDB: 12000,      // base/month
  objectStoragePerGB: 2, // ₦/GB
  cdnPerGB: 3,           // ₦/GB
  serverlessInvocations: 0.00005 // per invocation cost (example)
};

export function estimateCost(inputs){
  // inputs: { storageGB, dbInstances (1 or 0), monthlyRequests, cdnGB }
  const db = inputs.db ? UNIT_RATES.managedDB : 0;
  const storage = (inputs.storageGB || 0) * UNIT_RATES.objectStoragePerGB;
  const cdn = (inputs.cdnGB || 0) * UNIT_RATES.cdnPerGB;
  const requests = (inputs.monthlyRequests || 0) * UNIT_RATES.serverlessInvocations;
  const total = Math.round(db + storage + cdn + requests);
  return { db, storage, cdn, requests, total };
}
