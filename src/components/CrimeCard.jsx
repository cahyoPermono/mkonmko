import React from 'react';

const CrimeCard = ({ title, description, icon, children, color }) => {
  return (
    <div className="crime-card" style={{ '--card-color': color }}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="card-interactive">
        {children}
      </div>
    </div>
  );
};

export default CrimeCard;
