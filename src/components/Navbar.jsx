import React from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Little Lemon</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/booking">Reservas</a></li>
        <li><a href="#about">Acerca de</a></li>
      </ul>
    </nav>
  );  
};

export default Navbar;
