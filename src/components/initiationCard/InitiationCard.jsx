import React from 'react';
import './Initiation.scss';

const InitiationCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <p className="description">{description}</p>
    </div>
  );
};

export default InitiationCard;