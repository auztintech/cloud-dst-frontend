import React from 'react';

export default function RecommendationCard({rec}){
  return (
    <div style={{padding:12,borderRadius:8,background:'#fbfbff',marginBottom:10}}>
      <div style={{fontWeight:700}}>{rec.title}</div>
      <div className="small" style={{marginTop:6}}>{rec.detail}</div>
    </div>
  );
}

