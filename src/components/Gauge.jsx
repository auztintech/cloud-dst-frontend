import React from 'react';
export default function Gauge({value}){
  const hue = (value/100)*120; // green at 100
  return (
    <div style={{textAlign:'center',padding:14}} className="card">
      <div style={{fontSize:28,fontWeight:700,color:`hsl(${hue}deg,60%,30%)`}}>{value}%</div>
      <div className="small">Readiness Score</div>
    </div>
  );
}
