// SystemCard.jsx
import React from 'react';
import './systemCard.scss';

const SystemCard = ({ title, description, link }) => (
  <div className="system-card">
    <h3>{title}</h3>
    <p>{description}</p>
    {link && <a href={link} target="_blank" rel="noopener noreferrer">Saiba mais</a>}
  </div>
);

export default SystemCard;