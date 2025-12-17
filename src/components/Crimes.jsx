import React from 'react';
import CrimeCard from './CrimeCard';
import AstorSimulator from './AstorSimulator';
import TeaDrinking from './TeaDrinking';
import ShowerGame from './ShowerGame';

const Crimes = () => {
  return (
    <section className="crimes-section">
      <h2>Daftar Dosa-Dosa</h2>
      <div className="crimes-grid">
        <CrimeCard 
          title="Penyelundupan Astor" 
          description="Tertangkap basah menghisap Astor layaknya cerutu mahal. Klik buat ikut nyebul!"
          icon="🍫"
          color="#8B4513"
        >
          <AstorSimulator />
        </CrimeCard>

        <CrimeCard 
          title="Pencurian Teh Kakek" 
          description="Sering nyolong teh anget pas lagi lengah. Seruput sebelum ketahuan!"
          icon="🍵"
          color="#2E8B57"
        >
          <TeaDrinking />
        </CrimeCard>

        <CrimeCard 
          title="Buronan Kamar Mandi" 
          description="Sudah 35 tahun menghindari air sabun. Coba tangkap kalau bisa!"
          icon="🚿"
          color="#1E90FF"
        >
          <ShowerGame />
        </CrimeCard>
      </div>
    </section>
  );
};

export default Crimes;
