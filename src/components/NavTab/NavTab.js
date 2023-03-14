import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__list-item">
          <Link to="/signup" className="nav-tab__link nav-tab__link_type_signup">Регистрация</Link>
        </li>
        <li className="auth__list-item">
          <Link to="/signin" className="nav-tab__link nav-tab__link_type_signin">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;