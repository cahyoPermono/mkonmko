import React, { useState, useRef } from 'react';
import mkonmkoImg from '../assets/mkonmko_healthy.png';

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const speak = () => {
    const utterances = [
      "Astor gue jangan diminta!",
      "Mandi? Apa itu mandi?",
      "Halo netizen yang budiman!",
      "Pinjem seratus dong, buat beli Astor.",
      "Gue ganteng karena makan Astor.",
      "Jangan lupa bahagia hari ini!",
      "Awas, nanti naksir lho!"
    ];
    
    const text = utterances[Math.floor(Math.random() * utterances.length)];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.pitch = 1.2; // Sedikit cempreng biar lucu
    utterance.rate = 1.1;
    window.speechSynthesis.speak(utterance);

    // Trigger shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="wanted-poster">
          <div className="poster-header">
            <h2>DICARI</h2>
            <p>BURONAN PALING HAPPY & ENERGIK</p>
          </div>
          <div 
            className="tilt-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={speak}
            style={{ cursor: 'pointer' }}
          >
            <div 
              className="image-container tilt-inner"
              ref={imgRef}
              style={{ 
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` 
              }}
            >
              <img src={mkonmkoImg} alt="Mkonmko" className="mkonmko-img" />
              <div className="click-hint">👆 Klik Muka Gue!</div>
            </div>
          </div>
          <div className="poster-footer">
            <h3>MKONMKO</h3>
            <div className="stats">
              <p><strong>Kondisi:</strong> Langsing Alami (Body Goals)</p>
              <p><strong>Hobi:</strong> Tebar Pesona & Makan Astor</p>
              <p><strong>Imbalan:</strong> Ikutan Happy Bareng</p>
            </div>
          </div>
        </div>
        <div className="hero-text">
          <h1>Legenda Mkonmko</h1>
          <p>Lihatlah energi positifnya! Rahasia tubuh ideal tanpa diet: Cukup bahagia, makan Astor, dan lari dari kenyataan (eh, lari pagi maksudnya). Hidup itu harus asik!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
