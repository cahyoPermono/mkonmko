import React, { useState } from 'react';
import teaImg from '../assets/tea.png';

const TeaDrinking = () => {
  const [sipping, setSipping] = useState(false);
  const [happinessLevel, setHappinessLevel] = useState(100);

  const handleSip = () => {
    setSipping(true);
    setHappinessLevel(prev => Math.min(prev + 50, 1000)); // Max happiness
    
    // Trigger screen shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);

    setTimeout(() => setSipping(false), 1000);
  };

  const getBarColor = () => {
    if (happinessLevel < 300) return '#4caf50';
    if (happinessLevel < 700) return '#2196f3';
    return '#9c27b0'; // Ultra happy
  };

  return (
    <div className="tea-drinking">
      <div className="sugar-meter-container">
        <div className="sugar-label">Level Kebahagiaan: {happinessLevel}%</div>
        <div className="sugar-bar-bg">
          <div 
            className="sugar-bar-fill" 
            style={{ 
              width: `${Math.min((happinessLevel / 1000) * 100, 100)}%`,
              backgroundColor: getBarColor()
            }}
          ></div>
        </div>
      </div>
      
      <div className={`tea-container ${sipping ? 'sipping' : ''}`} onClick={handleSip}>
        <img src={teaImg} alt="Tea Cup" className="tea-img" />
        {sipping && <div className="slurp-text">SRUPUT!</div>}
      </div>
      <p className="instruction">Klik buat Nambah Mood</p>
    </div>
  );
};

export default TeaDrinking;
