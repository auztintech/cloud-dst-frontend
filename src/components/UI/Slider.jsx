import React from 'react';

export default function Slider({ value, onChange, min, max, step, showMarkers }) {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div style={{ marginTop: '16px' }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(+e.target.value)}
        style={{
          width: '100%',
          height: '8px',
          borderRadius: '4px',
          outline: 'none',
          background: `linear-gradient(to right, #667eea 0%, #667eea ${percentage}%, #e8e8e8 ${percentage}%, #e8e8e8 100%)`,
          WebkitAppearance: 'none',
          appearance: 'none'
        }}
      />
      {showMarkers && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
          fontSize: '12px',
          color: '#888'
        }}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}