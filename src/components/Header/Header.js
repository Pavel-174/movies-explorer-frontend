import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header header_type_auth">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="Логотип Movies Explorer"></img>
      </Link>
      <NavTab />
    </header>
  );
};

export default Header;