import React from 'react';
import './FlipCard.css';

const FlipCard = ({ imageSrc, backText }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt="Skill Front" />
        </div>
        <div className="flip-card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
