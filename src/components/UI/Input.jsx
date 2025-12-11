import React from 'react';

export default function Input({ value, onChange, placeholder, type = 'text', prefix, autoFocus, style }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      {prefix && (
        <span style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#888',
          fontSize: '15px',
          fontWeight: '600'
        }}>
          {prefix}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        style={{
          width: '100%',
          padding: '16px',
          paddingLeft: prefix ? '36px' : '16px',
          fontSize: '15px',
          border: '2px solid #e8e8e8',
          borderRadius: '12px',
          outline: 'none',
          transition: 'all 0.2s',
          fontFamily: 'inherit'
        }}
        onFocus={e => e.target.style.borderColor = '#667eea'}
        onBlur={e => e.target.style.borderColor = '#e8e8e8'}
      />
    </div>
  );
}