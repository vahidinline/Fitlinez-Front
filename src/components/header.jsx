import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
//import { useAuth } from './userFlow/authContent';

const Header = (props) => {
  const location = useLocation();

  const setUrl = location.pathname;
  // const { currentUser } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light primary sticky-top"
      style={{ direction: 'rtl', background: '#00B4E5' }}>
      <Link className="text-decoration-none text-reset" to="/">
        <h1 className="text-light" style={{ fontFamily: 'Montserrat' }}>
          FITLINEZ
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-light">
          <li className={`nav-item ${setUrl === '/' ? 'active' : ''}`}>
            <Link className="nav-link text-light h6" to="/">
              صفحه اصلی <span className="sr-only"></span>
            </Link>
          </li>
          <div className="divider"></div>
          <li className={`nav-item ${setUrl === '/price' ? 'active' : ''}`}>
            <Link className="nav-link text-light h6" to="/price">
              دوره ها{' '}
            </Link>
          </li>
          <li className={`nav-item ${setUrl === '/about' ? 'active' : ''}`}>
            <Link className="nav-link text-light h6" to="/about">
              درباره من
            </Link>
          </li>
          <li className={`nav-item ${setUrl === '/calories' ? 'active' : ''}`}>
            <Link className="nav-link text-light h6" to="/calories">
              محاسبه کالری
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
