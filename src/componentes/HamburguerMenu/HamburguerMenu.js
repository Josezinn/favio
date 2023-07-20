import React, { useState } from 'react';
import './HamburguerMenu.css';

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburguer-menu ${isOpen ? 'open' : ''}`}>
      <button className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#pesquisas">Pesquisas</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
