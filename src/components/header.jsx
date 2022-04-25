import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './style.css';
import { useAuth } from './userFlow/authContent';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const setUrl = location.pathname;
  const { currentUser, logout } = useAuth();

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light primary sticky-top'
      style={{ direction: 'rtl', background: '#00B4E5' }}
    >
      <Link className='text-decoration-none text-reset' to='/'>
        <h1 className='text-light' style={{ fontFamily: 'Montserrat' }}>
          FITLINEZ
        </h1>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav text-light'>
          <li className={`nav-item ${setUrl === '/' ? 'active' : ''}`}>
            <Link className='nav-link text-light h6' to='/'>
              صفحه اصلی <span className='sr-only'></span>
            </Link>
          </li>
          <div class='divider'></div>
          <li className={`nav-item ${setUrl === '/price' ? 'active' : ''}`}>
            <Link className='nav-link text-light h6' to='/price'>
              دوره ها{' '}
            </Link>
          </li>
          <li className={`nav-item ${setUrl === '/about' ? 'active' : ''}`}>
            <Link className='nav-link text-light h6' to='/about'>
              درباره من
            </Link>
          </li>

          {!currentUser && (
            <li className={`nav-item ${setUrl === '/login' ? 'active' : ''}`}>
              <Link className='nav-link text-light h6' to='/login'>
                ورود
              </Link>
            </li>
          )}
          <i className='fa fa-instagram' aria-hidden='true'></i>
          {currentUser && (
            <>
              <li
                className={`nav-item ${setUrl === '/profile' ? 'active' : ''}`}
              >
                <Link className='nav-link text-light' to='/profile'>
                  پروفایل
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {currentUser && (
        <>
          <div className='d-flex'>
            <button
              className='btn btn-danger'
              onClick={(e) => {
                e.preventDefault();
                logout().then(() => navigate('/login'));
              }}
              type='submit'
            >
              خروج
            </button>
          </div>
          <span>{currentUser.name}</span>
        </>
      )}
    </nav>
  );
};

export default Header;
