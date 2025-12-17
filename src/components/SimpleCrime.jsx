import React, { useState } from 'react';

const SimpleCrime = ({ btnText, resultText, resultEmoji, duration = 2000 }) => {
  const [active, setActive] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    if (active) return;
    setActive(true);
    setShowResult(true);

    // Trigger shake effect
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);

    setTimeout(() => {
      setActive(false);
      setShowResult(false);
    }, duration);
  };

  return (
    <div className="simple-crime-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
      <div style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
        {showResult ? (
          <div className="crime-result" style={{ animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
            <span style={{ fontSize: '2.5rem', display: 'block' }}>{resultEmoji}</span>
            <span style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2rem' }}>{resultText}</span>
          </div>
        ) : (
          <div style={{ fontSize: '2rem', opacity: 0.3 }}>❓</div>
        )}
      </div>
      <button 
        onClick={handleClick} 
        disabled={active}
        style={{
          background: '#333',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontWeight: 'bold',
          cursor: active ? 'default' : 'pointer',
          opacity: active ? 0.7 : 1,
          transform: active ? 'scale(0.95)' : 'scale(1)',
          transition: 'all 0.2s'
        }}
      >
        {active ? 'Loading Dosa...' : btnText}
      </button>
    </div>
  );
};

export default SimpleCrime;
