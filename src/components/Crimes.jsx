import React from 'react';
import CrimeCard from './CrimeCard';
import AstorSimulator from './AstorSimulator';
import TeaDrinking from './TeaDrinking';
import ShowerGame from './ShowerGame';
import SimpleCrime from './SimpleCrime';

const Crimes = () => {
  return (
    <section className="crimes-section">
      <h2>Daftar Dosa-Dosa</h2>
      <div className="crimes-grid">
        {/* Original Crimes */}
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

        {/* New Crimes (Funny Sins) */}
        <CrimeCard 
          title="Gorengan Fraud" 
          description="Makan 5 ngakunya cuma 2. Matematika mendadak lemah kalau di warung."
          icon="🍤"
          color="#FF8C00"
        >
          <SimpleCrime 
            btnText="Bayar Gorengan" 
            resultText="MAKAN 5 BAYAR 2!" 
            resultEmoji="🤥" 
          />
        </CrimeCard>

        <CrimeCard 
          title="Sandal Swapping" 
          description="Datang pake sandal jepit putus, pulang pake Swallow baru. Magic!"
          icon="🩴"
          color="#9C27B0"
        >
          <SimpleCrime 
            btnText="Tukar Sandal" 
            resultText="DAPET SWALLOW BARU!" 
            resultEmoji="✨" 
          />
        </CrimeCard>

        <CrimeCard 
          title="Wifi Leeching" 
          description="Numpang wifi tetangga 24 jam, tapi marah-marah kalau koneksinya lemot."
          icon="📶"
          color="#00BCD4"
        >
          <SimpleCrime 
            btnText="Connect Wifi" 
            resultText="LEMOT BANGET SIH!" 
            resultEmoji="🤬" 
          />
        </CrimeCard>

        <CrimeCard 
          title="Group Project Ghosting" 
          description="Tugas kelompok cuma numpang nama. Pas presentasi pura-pura sakit perut."
          icon="👻"
          color="#607D8B"
        >
          <SimpleCrime 
            btnText="Kerja Kelompok" 
            resultText="NITIP NAMA DOANG!" 
            resultEmoji="📝" 
          />
        </CrimeCard>

        <CrimeCard 
          title="Checkout Ghosting" 
          description="Keranjang Shopee penuh barang impian, tapi gak pernah di-checkout. Halu!"
          icon="🛒"
          color="#E91E63"
        >
          <SimpleCrime 
            btnText="Checkout Sekarang" 
            resultText="SALDO KOSONG!" 
            resultEmoji="💸" 
          />
        </CrimeCard>

        <CrimeCard 
          title="Alarm Hoarding" 
          description="Pasang 10 alarm dari jam 5 pagi, bangunnya tetep jam 12 siang."
          icon="⏰"
          color="#F44336"
        >
          <SimpleCrime 
            btnText="Pasang Alarm" 
            resultText="TIDUR LAGI..." 
            resultEmoji="😴" 
          />
        </CrimeCard>
      </div>
    </section>
  );
};

export default Crimes;
