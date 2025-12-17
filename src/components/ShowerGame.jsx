import React, { useState } from 'react';
import angryMomImg from '../assets/angry_mom.png';

const taunts = [
  "Eits!", "Gak kena!", "Wlee!", "Mandi? No way!", "Air itu dingin!", "Sabun itu pedih!"
];

const ShowerGame = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [panicMode, setPanicMode] = useState(false);
  const [taunt, setTaunt] = useState("");

  const moveButton = () => {
    if (panicMode) return;
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    
    // Random taunt
    const randomTaunt = taunts[Math.floor(Math.random() * taunts.length)];
    setTaunt(randomTaunt);
  };

  const handleCatch = () => {
    setPanicMode(true);
    setTaunt("");
    
    // Trigger screen shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
  };

  const resetGame = () => {
    setPanicMode(false);
    setPosition({ top: '50%', left: '50%' });
    setTaunt("");
  };

  return (
    <div className={`shower-game ${panicMode ? 'panic' : ''}`}>
      <div className="game-area">
        {!panicMode ? (
          <>
            <button 
              className="flee-btn"
              style={{ top: position.top, left: position.left }}
              onMouseEnter={moveButton}
              onClick={handleCatch}
            >
              Mandi Woy!
            </button>
            {taunt && (
              <div 
                className="taunt-text"
                style={{ top: position.top, left: position.left }}
              >
                {taunt}
              </div>
            )}
          </>
        ) : (
          <div className="panic-scene">
            <div className="mom-container">
              <img src={angryMomImg} alt="Angry Mom" className="angry-mom-img" />
              <div className="mom-shout">MANDI SEKARANG!!!</div>
            </div>
            <div className="mkonmko-panic">
              <p>AMPUN MAK! KABURRRR!</p>
              <button onClick={resetGame} className="run-btn">Lari (Reset)</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowerGame;
