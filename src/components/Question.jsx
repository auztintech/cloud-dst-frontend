import React from 'react';
export default function Question({label,children}){
  return (
    <div style={{marginBottom:12}}>
      <label style={{display:'block',fontWeight:600,marginBottom:6}}>{label}</label>
      <div>{children}</div>
    </div>
  );
}

