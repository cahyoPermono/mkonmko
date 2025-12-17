import React, { useState } from 'react';
import mkonmkoImg from '../assets/mkonmko_healthy.png';
import marwanImg from '../assets/marwan_boy.png';

const PartnerInCrime = () => {
  const [cheers, setCheers] = useState(false);

  const handleCheers = () => {
    setCheers(true);
    
    // Trigger screen shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);

    setTimeout(() => setCheers(false), 1000);
  };

  return (
    <section className="partner-section">
      <h2>KOMPLOTAN KRIMINAL</h2>
      <p className="subtitle">Partner in Crime: Ngerokok Astor & Minum Teh</p>
      
      <div className="partner-container" onClick={handleCheers}>
        <div className={`partner mkonmko ${cheers ? 'cheers-left' : ''}`}>
          <img src={mkonmkoImg} alt="Mkonmko" />
          <div className="name-tag">Mkonmko</div>
        </div>
        
        <div className={`partner marwan ${cheers ? 'cheers-right' : ''}`}>
          <img src={marwanImg} alt="Marwan Boy" />
          <div className="name-tag">Marwan Boy</div>
        </div>

        {cheers && (
          <div className="cheers-effect">
            <div className="cheers-text">MANTAP JIWA! 🤜🤛</div>
            <div className="sparkles">✨</div>
          </div>
        )}
      </div>
      
      <p className="instruction">Klik buat "Tos Astor"!</p>
    </section>
  );
};

export default PartnerInCrime;
