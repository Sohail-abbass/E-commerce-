import React from 'react';
import './MovingCard.css';

import shirt1 from '../Assets/shirt1.jpeg';
import shirt2 from '../Assets/shirt2.jpeg';
import shirt3 from '../Assets/shirt3.jpeg';
import shirt4 from '../Assets/shirt4.jpeg';
import shirt5 from '../Assets/shirt5.jpeg';

const cards = [
  { img: shirt1, name: 'Classic Shirt' },
  { img: shirt2, name: 'Formal Shirt' },
  { img: shirt3, name: 'Casual Shirt' },
  { img: shirt4, name: 'Denim Shirt' },
  { img: shirt5, name: 'Summer Shirt' },
];

const MovingCards = () => {
  // Duplicate cards array so the animation can loop smoothly
  const extendedCards = [...cards, ...cards];

  return (
    <div className="moving-cards-wrapper">
        <h1 style={{color:'blue',fontSize:'47px',padding:'28px' ,textAlign:'center'}}>Our top selling brands</h1>
      <div className="moving-cards-track">
        {extendedCards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.name} className="card-image" />
            <p className="card-name">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingCards;
