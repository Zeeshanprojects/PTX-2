import React from 'react';
import './Preloader.style.css';
import Image from '../Images/Image';

export default function Preloader() {
  return (
    <div className="preloader">
      <img className="pulse" src={Image.logo} alt="Logo" />
      <p className="loading-text">Loading...</p>
    </div>
  );
}
