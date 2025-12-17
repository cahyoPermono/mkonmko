import React, { useState } from 'react';
import mkonmkoImg from '../assets/mkonmko_healthy.png';
import marwanImg from '../assets/marwan_ariel.png';
import kukuBimaImg from '../assets/kuku_bima.png';
import masagelImg from '../assets/masagel_chef.png';
import gayogaImg from '../assets/gayoga_aceh.png';
import galgalangImg from '../assets/galgalang_geek.png';
import cahyoImg from '../assets/cahyoidolaq_new.png';
import bjoxImg from '../assets/bjox_playboy.png';
import sopayamImg from '../assets/sopayam_angel.png';
import nurforheadImg from '../assets/nurforhead_cupang.png';

const MkonmkoCircle = () => {
  // Marwan State
  const [cheers, setCheers] = useState(false);

  // Kuku Bima State
  const [fighting, setFighting] = useState(false);
  const [fightResult, setFightResult] = useState(null); // 'win' or 'lose'

  // Masagel State
  const [cooking, setCooking] = useState(false);
  const [cookResult, setCookResult] = useState(null); // 'burnt'

  // Gayoga State
  const [teasing, setTeasing] = useState(false);
  const [teaseResult, setTeaseResult] = useState(null);

  // Galgalang State
  const [dueling, setDueling] = useState(false);
  const [duelResult, setDuelResult] = useState(null);

  // Cahyoidolaq State
  const [respecting, setRespecting] = useState(false);
  const [respectResult, setRespectResult] = useState(null);

  // Bjox State
  const [arguing, setArguing] = useState(false);
  const [argueResult, setArgueResult] = useState(null);

  // Sopayam State
  const [praying, setPraying] = useState(false);

  // Nurforhead State
  const [hunting, setHunting] = useState(false);
  const [huntResult, setHuntResult] = useState(null);

  // Marwan Interaction
  const handleCheers = () => {
    if (cheers) return;
    setCheers(true);
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
    setTimeout(() => setCheers(false), 2000);
  };

  // Kuku Bima Interaction
  const handleFight = () => {
    if (fighting) return;
    setFighting(true);
    setFightResult(null);
    
    setTimeout(() => {
      setFightResult('lose'); // Always lose
      document.body.classList.add('shake');
      setTimeout(() => document.body.classList.remove('shake'), 500);
      setTimeout(() => {
        setFighting(false);
        setFightResult(null);
      }, 3000);
    }, 1000);
  };

  // Masagel Interaction
  const handleCook = () => {
    if (cooking) return;
    setCooking(true);
    setCookResult(null);

    setTimeout(() => {
      setCookResult('burnt');
      document.body.classList.add('shake');
      setTimeout(() => document.body.classList.remove('shake'), 500);
      setTimeout(() => {
        setCooking(false);
        setCookResult(null);
      }, 3000);
    }, 1500);
  };

  // Gayoga Interaction
  const handleTease = () => {
    if (teasing) return;
    setTeasing(true);
    setTeaseResult(null);

    setTimeout(() => {
      setTeaseResult('sigh');
      setTimeout(() => {
        setTeasing(false);
        setTeaseResult(null);
      }, 2000);
    }, 500);
  };

  // Galgalang Interaction
  const handleDuel = () => {
    if (dueling) return;
    setDueling(true);
    setDuelResult(null);

    setTimeout(() => {
      setDuelResult('summon');
      document.body.classList.add('shake');
      setTimeout(() => document.body.classList.remove('shake'), 500);
      setTimeout(() => {
        setDueling(false);
        setDuelResult(null);
      }, 3000);
    }, 1000);
  };

  // Cahyoidolaq Interaction
  const handleRespect = () => {
    if (respecting) return;
    setRespecting(true);
    setRespectResult(null);

    setTimeout(() => {
      setRespectResult('salute');
      setTimeout(() => {
        setRespecting(false);
        setRespectResult(null);
      }, 2000);
    }, 500);
  };

  // Bjox Interaction
  const handleArgue = () => {
    if (arguing) return;
    setArguing(true);
    setArgueResult(null);

    const insults = [
      "Gaya elit, ekonomi sulit!",
      "Muka pas-pasan, gaya selangit!",
      "Pinjem dulu seratus!",
      "Minimal mandi dulu bang!"
    ];
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];

    setTimeout(() => {
      setArgueResult(randomInsult);
      document.body.classList.add('shake');
      setTimeout(() => document.body.classList.remove('shake'), 500);
      setTimeout(() => {
        setArguing(false);
        setArgueResult(null);
      }, 3000);
    }, 500);
  };

  // Sopayam Interaction
  const handlePray = () => {
    if (praying) return;
    setPraying(true);
    setTimeout(() => setPraying(false), 3000);
  };

  // Nurforhead Interaction
  const handleHunt = () => {
    if (hunting) return;
    setHunting(true);
    setHuntResult(null);

    setTimeout(() => {
      setHuntResult('found');
      setTimeout(() => {
        setHunting(false);
        setHuntResult(null);
      }, 2000);
    }, 500);
  };

  return (
    <section className="circle-section">
      <h2>MKONMKO'S CIRCLE</h2>
      <p className="subtitle">Teman, Lawan, Bos, & Legenda</p>
      
      <div className="characters-grid">
        {/* Marwan Boy */}
        <div className="character-card marwan-card" onClick={handleCheers}>
          <h3>Marwan Boy</h3>
          <p className="role">Bestie (Ariel KW Super)</p>
          <div className="char-img-container">
            <img src={marwanImg} alt="Marwan Boy" className={`char-img ${cheers ? 'cheers-anim' : ''}`} />
            {cheers && <div className="effect-text high-contrast">MANTAP JIWA! ✨</div>}
          </div>
          <button className="action-btn">Tos Astor 🍫</button>
        </div>

        {/* Kuku Bima */}
        <div className="character-card kuku-card">
          <h3>Kuku Bima</h3>
          <p className="role">Rival (Juara Kampung)</p>
          <div className="char-img-container">
            <img src={kukuBimaImg} alt="Kuku Bima" className={`char-img ${fighting ? 'fight-anim' : ''}`} />
            {fightResult === 'lose' && (
              <div className="effect-text lose high-contrast">
                <span style={{fontSize: '2rem'}}>🤕</span>
                <br/>MKONMKO K.O!
              </div>
            )}
          </div>
          <button className="action-btn fight-btn" onClick={handleFight} disabled={fighting}>
            {fighting ? 'Berantem...' : 'Ajak Berantem 🥊'}
          </button>
        </div>

        {/* Masagel */}
        <div className="character-card masagel-card">
          <h3>Masagel</h3>
          <p className="role">Chef (Sumbu Pendek)</p>
          <div className="char-img-container">
            <img src={masagelImg} alt="Masagel" className={`char-img ${cooking ? 'cook-anim' : ''}`} />
            {cookResult === 'burnt' && (
              <div className="effect-text burnt high-contrast">
                <span style={{fontSize: '2rem'}}>🔥</span>
                <br/>MIE GOSONG!!
              </div>
            )}
          </div>
          <button className="action-btn cook-btn" onClick={handleCook} disabled={cooking}>
            {cooking ? 'Memasak...' : 'Masakin Mie 🍜'}
          </button>
        </div>

        {/* Gayoga */}
        <div className="character-card gayoga-card">
          <h3>Gayoga</h3>
          <p className="role">Korban (Pasrah)</p>
          <div className="char-img-container">
            <img src={gayogaImg} alt="Gayoga" className={`char-img ${teasing ? 'tease-anim' : ''}`} />
            {teaseResult === 'sigh' && (
              <div className="effect-text sigh high-contrast">
                <span style={{fontSize: '2rem'}}>😮‍💨</span>
                <br/>HADEHH...
              </div>
            )}
          </div>
          <button className="action-btn tease-btn" onClick={handleTease} disabled={teasing}>
            {teasing ? 'Bully...' : 'Ceng-cengin 🤪'}
          </button>
        </div>

        {/* Galgalang */}
        <div className="character-card galgalang-card">
          <h3>Galgalang</h3>
          <p className="role">Geek (Duelist)</p>
          <div className="char-img-container">
            <img src={galgalangImg} alt="Galgalang" className={`char-img ${dueling ? 'duel-anim' : ''}`} />
            {duelResult === 'summon' && (
              <div className="effect-text summon high-contrast">
                <span style={{fontSize: '2rem'}}>🃏</span>
                <br/>IT'S TIME TO DUEL!
              </div>
            )}
          </div>
          <button className="action-btn duel-btn" onClick={handleDuel} disabled={dueling}>
            {dueling ? 'Summoning...' : 'Ajak Duel ⚔️'}
          </button>
        </div>

        {/* Cahyoidolaq */}
        <div className="character-card cahyo-card">
          <h3>Cahyoidolaq</h3>
          <p className="role">The Boss (Casual Mode)</p>
          <div className="char-img-container">
            <img src={cahyoImg} alt="Cahyoidolaq" className={`char-img ${respecting ? 'respect-anim' : ''}`} />
            {respectResult === 'salute' && (
              <div className="effect-text respect high-contrast">
                <span style={{fontSize: '2rem'}}>🫡</span>
                <br/>SIAP LAKSANAKAN!
              </div>
            )}
          </div>
          <button className="action-btn respect-btn" onClick={handleRespect} disabled={respecting}>
            {respecting ? 'Bowing...' : 'Sungkem 🙏'}
          </button>
        </div>

        {/* Bjox */}
        <div className="character-card bjox-card">
          <h3>Bjox</h3>
          <p className="role">Playboy (Wannabe)</p>
          <div className="char-img-container">
            <img src={bjoxImg} alt="Bjox" className={`char-img ${arguing ? 'argue-anim' : ''}`} />
            {argueResult && (
              <div className="effect-text argue high-contrast">
                <span style={{fontSize: '1.5rem'}}>🤬</span>
                <br/>{argueResult}
              </div>
            )}
          </div>
          <button className="action-btn argue-btn" onClick={handleArgue} disabled={arguing}>
            {arguing ? 'Ribut...' : 'Adu Bacot 🗣️'}
          </button>
        </div>

        {/* Nurforhead */}
        <div className="character-card nur-card">
          <h3>Nurforhead</h3>
          <p className="role">Cupang Hunter (Desa Sebelah)</p>
          <div className="char-img-container">
            <img src={nurforheadImg} alt="Nurforhead" className={`char-img ${hunting ? 'hunt-anim' : ''}`} />
            {huntResult === 'found' && (
              <div className="effect-text hunt high-contrast">
                <span style={{fontSize: '2rem'}}>🐟</span>
                <br/>DAPET SLAYER!
              </div>
            )}
          </div>
          <button className="action-btn hunt-btn" onClick={handleHunt} disabled={hunting}>
            {hunting ? 'Nyari...' : 'Cari Cupang 🌾'}
          </button>
        </div>

        {/* Sopayam */}
        <div className="character-card sopayam-card">
          <h3>Sopayam</h3>
          <p className="role">The Legend (Respect)</p>
          <div className="char-img-container">
            <img src={sopayamImg} alt="Sopayam" className={`char-img ${praying ? 'pray-anim' : ''}`} />
            {praying && (
              <div className="effect-text pray high-contrast">
                <span style={{fontSize: '2rem'}}>🕊️</span>
                <br/>REST IN PEACE
              </div>
            )}
          </div>
          <button className="action-btn pray-btn" onClick={handlePray} disabled={praying}>
            {praying ? 'Berdoa...' : 'Doa Bersama 🤲'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MkonmkoCircle;
