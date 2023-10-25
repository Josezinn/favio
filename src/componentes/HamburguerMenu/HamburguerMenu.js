import React, { useState } from 'react';
import './HamburguerMenu.css';
import { Link } from 'react-router-dom';

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
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'Login'}>Login</Link></li>
          <li><Link to={'Cadastro'}>Cadastro</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
