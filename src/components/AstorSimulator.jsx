import React, { useState } from 'react';
import astorImg from '../assets/astor.png';

const AstorSimulator = () => {
  const [effects, setEffects] = useState([]);

  const handlePuff = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const type = Math.random() > 0.5 ? 'puff' : 'crunch';
    
    // Trigger screen shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);

    const newEffect = {
      id: Date.now(),
      x,
      y,
      type,
      text: type === 'puff' ? '💨' : 'KRIUK!'
    };

    setEffects((prev) => [...prev, newEffect]);

    setTimeout(() => {
      setEffects((prev) => prev.filter((p) => p.id !== newEffect.id));
    }, 1000);
  };

  return (
    <div className="astor-simulator" onClick={handlePuff}>
      <img src={astorImg} alt="Astor Stick" className="astor-img" />
      {effects.map((effect) => (
        <div 
          key={effect.id} 
          className={effect.type === 'puff' ? 'smoke-puff' : 'crunch-text'}
          style={{ left: effect.x, top: effect.y }}
        >
          {effect.text}
        </div>
      ))}
      <p className="instruction">Klik buat Nyebul / Ngemil</p>
    </div>
  );
};

export default AstorSimulator;
