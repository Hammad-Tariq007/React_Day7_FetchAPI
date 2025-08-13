import React from 'react';
import './Card.css';

const Card = ({ id, title, body }) => {
  return (
    <div className="card">
      <div className="card-id">#{id}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </div>
  );
};

export default Card;
