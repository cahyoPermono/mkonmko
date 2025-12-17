import React from 'react';

const FloatingBackground = () => {
  const icons = ['🍫', '🫧', '✨', '⚡', '🐱', '🩴', '🕶️']; // Added cat, sandal, sunglasses
  
  const elements = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    icon: icons[i % icons.length],
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${10 + Math.random() * 10}s`
  }));

  return (
    <div className="floating-bg">
      {elements.map((el) => (
        <div 
          key={el.id} 
          className="floater"
          style={{ 
            left: el.left, 
            top: el.top, 
            animationDelay: el.delay,
            animationDuration: el.duration
          }}
        >
          {el.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingBackground;
