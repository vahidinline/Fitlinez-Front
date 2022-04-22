import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import c from '../assets/PN_badge_L1-N_.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-fluid' style={{ direction: 'ltr' }}>
      <footer
        id='sticky-footer'
        className=' text-center text-lg-start flex-shrink-0 '
      >
        <div
          className='row'
          style={{ direction: 'rtl', background: '#00B4E5' }}
        >
          <div className='col-md-4'>
            <section class='mb-4'>
              <a
                class='btn btn-link btn-floating btn-lg text-dark m-1'
                href='https://twitter.com/azarshafieii'
                role='button'
                data-mdb-ripple-color='dark'
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                class='btn btn-link btn-floating btn-lg text-dark m-1'
                href='https://twitter.com/azarshafieii'
                role='button'
                data-mdb-ripple-color='dark'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                class='btn btn-link btn-floating btn-lg text-dark m-1'
                href='https://twitter.com/azarshafieii'
                role='button'
                data-mdb-ripple-color='dark'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                class='btn btn-link btn-floating btn-lg text-dark m-1'
                href='https://twitter.com/azarshafieii'
                role='button'
                data-mdb-ripple-color='dark'
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </section>
          </div>
          <div className='col-md-4 text-light'>
            © {new Date().getFullYear()} Copyright: FitLinez
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
