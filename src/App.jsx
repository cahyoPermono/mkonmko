import React from 'react';
import Hero from './components/Hero';
import Crimes from './components/Crimes';
import BreakingNews from './components/BreakingNews';
import WisdomGenerator from './components/WisdomGenerator';
import FloatingBackground from './components/FloatingBackground';
import SeriousMode from './components/SeriousMode';
import PartnerInCrime from './components/PartnerInCrime';

function App() {
  return (
    <div className="app-container">
      <SeriousMode />
      <FloatingBackground />
      <Hero />
      <PartnerInCrime />
      <WisdomGenerator />
      <Crimes />
      <BreakingNews />
    </div>
  );
}

export default App;
