import React from 'react';

export default function Hint({ children, style }) {
  return (
    <div style={{
      fontSize: '13px',
      color: '#888',
      marginTop: '12px',
      ...style
    }}>
      {children}
    </div>
  );
}