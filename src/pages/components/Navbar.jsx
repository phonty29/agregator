import React from 'react';
// import {Link} from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-main">
            <a to="#" className="navbar-link">Главная</a>
        </div>
        <div className="navbar-links">
            <a to="#" className="navbar-link">Регистрация</a>
            <a to="#" className="navbar-link">Войти</a>
        </div>        
    </div>
  );
}

export default Navbar;