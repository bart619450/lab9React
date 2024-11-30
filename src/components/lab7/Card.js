
import React from 'react';

const Card = ({ name, age, country }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default Card;
