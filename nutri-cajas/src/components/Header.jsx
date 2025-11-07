import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo-nutri-familia.svg';

const Header = () => {
  return (
    <header>
      <h1>
        <NavLink to="/">
          <img src={logo} alt="Nutri-Cajas Logo" className="header-logo" />
        </NavLink>
      </h1>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
          <li><NavLink to="/nuestras-cajas">Nuestras Cajas</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
