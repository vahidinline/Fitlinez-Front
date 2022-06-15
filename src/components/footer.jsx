import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid" style={{ direction: 'ltr' }}>
      <footer
        id="sticky-footer"
        className=" text-center text-lg-start flex-shrink-0 ">
        <div
          className="row"
          style={{ direction: 'rtl', background: '#00B4E5' }}>
          <div className="col-md-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://twitter.com/azarshafieii"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="/"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://instagram.com/fit.linez"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://t.me/fitlinez"
                role="button"
                data-mdb-ripple-color="dark">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </section>
          </div>
          <div className="col-md-4 text-light">
            © {new Date().getFullYear()} Copyright: GODIET OÜ
          </div>
          <div className="col-md-4 text-light">
            <div
              className="btn-group center"
              style={{ direction: 'ltr' }}
              role="group"
              aria-label="Basic example">
              <Link to="/bmi" type="button" class="btn btn-primary">
                محاسبه BMI
              </Link>
              <Link to="/calories" type="button" class="btn btn-success">
                محاسبه کالری نقصان
              </Link>
              <Link to="/bfp" type="button" class="btn btn-info">
                محاسبه چربی بدن{' '}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
