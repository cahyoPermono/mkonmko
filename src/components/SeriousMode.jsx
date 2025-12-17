import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const SeriousMode = () => {
  const [active, setActive] = useState(false);
  const [exploding, setExploding] = useState(false);

  const activateSeriousMode = () => {
    setActive(true);
    
    // After 2 seconds, explode back
    setTimeout(() => {
      setExploding(true);
      triggerExplosion();
      
      // Reset after explosion animation
      setTimeout(() => {
        setActive(false);
        setExploding(false);
      }, 2000);
    }, 2500);
  };

  const triggerExplosion = () => {
    // Screen shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);

    // Confetti explosion
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  if (active) {
    return (
      <div className={`serious-overlay ${exploding ? 'exploding' : ''}`}>
        {!exploding ? (
          <div className="serious-content">
            <h1>Curriculum Vitae</h1>
            <hr />
            <p><strong>Name:</strong> Mr. Mkonmko</p>
            <p><strong>Profession:</strong> Professional Snacker</p>
            <p><strong>Experience:</strong> 35 Years of...</p>
            <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#666' }}>Loading professional assets...</p>
          </div>
        ) : (
          <div className="explosion-message">
            <h1>BOSAN AH!</h1>
            <h2>KEMBALI KE MODE RUSUH! 🤪</h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <button className="serious-btn" onClick={activateSeriousMode}>
      👔 Mode Serius
    </button>
  );
};

export default SeriousMode;
