import React from 'react';
import { Check } from 'lucide-react';

export function OptionCard({ selected, onClick, children }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '20px 16px',
        borderRadius: '12px',
        border: `2px solid ${selected ? '#667eea' : '#e8e8e8'}`,
        background: selected ? '#667eea10' : 'white',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
      }}
      onMouseOver={e => {
        if (!selected) e.currentTarget.style.borderColor = '#667eea';
      }}
      onMouseOut={e => {
        if (!selected) e.currentTarget.style.borderColor = '#e8e8e8';
      }}
    >
      {selected && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#10b981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Check size={14} color="white" />
        </div>
      )}
      {children}
    </div>
  );
}

export function SelectCard({ selected, onClick, children, style }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '18px',
        borderRadius: '12px',
        border: `2px solid ${selected ? '#667eea' : '#e8e8e8'}`,
        background: selected ? '#667eea10' : 'white',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        ...style
      }}
      onMouseOver={e => {
        if (!selected) e.currentTarget.style.borderColor = '#667eea';
      }}
      onMouseOut={e => {
        if (!selected) e.currentTarget.style.borderColor = '#e8e8e8';
      }}
    >
      {children}
      {selected && (
        <Check size={20} color="#10b981" style={{ marginLeft: 'auto' }} />
      )}
    </div>
  );
}

export function ServiceCard({ selected, onClick, children }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '14px 16px',
        borderRadius: '10px',
        border: `2px solid ${selected ? '#667eea' : '#e8e8e8'}`,
        background: selected ? '#667eea10' : 'white',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: '500'
      }}
      onMouseOver={e => {
        if (!selected) e.currentTarget.style.borderColor = '#667eea';
      }}
      onMouseOut={e => {
        if (!selected) e.currentTarget.style.borderColor = '#e8e8e8';
      }}
    >
      {children}
    </div>
  );
}

export function CheckCard({ checked, onChange, title, description }) {
  return (
    <div
      onClick={onChange}
      style={{
        padding: '18px',
        borderRadius: '12px',
        border: `2px solid ${checked ? '#667eea' : '#e8e8e8'}`,
        background: checked ? '#667eea10' : 'white',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '6px',
        border: `2px solid ${checked ? '#667eea' : '#ccc'}`,
        background: checked ? '#667eea' : 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {checked && <Check size={16} color="white" />}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '600', fontSize: '15px' }}>{title}</div>
        <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{description}</div>
      </div>
    </div>
  );
}