import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const quotes = [
  "Mandi itu hanya ilusi, daki itu abadi.",
  "Hidup itu pahit, makanya minum teh manis.",
  "Jangan menunda makan Astor sampai besok, kalau bisa sekarang.",
  "Air adalah musuh alami, teh adalah sahabat sejati.",
  "Dewasa itu pilihan, jadi bocah itu bakat.",
  "Kalau ada Astor, kenapa harus makan nasi?",
  "Wangi sabun itu overrated, wangi coklat itu surga.",
  "Kerja keras itu penting, tapi istirahat sambil ngemil lebih penting.",
  "Cita-citaku sederhana: Punya pabrik Astor sendiri.",
  "Kenapa harus mandi kalau nanti kotor lagi?"
];

const WisdomGenerator = () => {
  const [quote, setQuote] = useState("Klik tombol di bawah buat dapet pencerahan.");

  const generateWisdom = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FF4500', '#8B4513'] // Gold, Orange, Chocolate
    });
  };

  return (
    <div className="wisdom-section">
      <h2>Kata Mutiara Mkonmko</h2>
      <div className="wisdom-box">
        <p>"{quote}"</p>
      </div>
      <button className="wisdom-btn" onClick={generateWisdom}>
        Minta Pencerahan
      </button>
    </div>
  );
};

export default WisdomGenerator;
