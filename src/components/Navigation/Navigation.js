import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__bar">
          <div className="navigation__list-container">
            <ul className="navigation__list">
              <li className="navigation__list-item">
                <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/profile" className="navigation__link navigation__link_type_profile">Аккаунт</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;