import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from './authContent';
import { useNavigate } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, signInWithGoogle } = useAuth();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div className='container' style={{ direction: 'ltr' }}>
      <div className='row'>
        <div className='col col-sm-2'></div>
        <div className='col col-sm-8'>
          <h1 className='text-center m-5'>ورود به حساب کاربری</h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              //console.log(email, password);
              setIsSubmitting(true);
              login(email, password)
                .then((res) => navigate('/admin'))
                .catch((error) => alert('Access Denied'))
                .finally(() => mounted.current && setIsSubmitting(false));
            }}
          >
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>آدرس ایمیل</label>

              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                  </span>
                </div>
                <input
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name='email'
                  type='email'
                  required={true}
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>رمز عبور</label>

              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-lock'></i>
                  </span>
                </div>
                <input
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name='password'
                  type='password'
                  required={true}
                />
              </div>
            </div>
            <div className='form-group'>
              <button className='btn btn-primary btn-block' type='submit'>
                {isSubmitting && (
                  <>
                    <span
                      className='spinner-grow spinner-grow-sm'
                      role='false'
                      aria-hidden='false'
                    ></span>
                    <span className='sr-only'>Loading...</span>
                  </>
                )}
                ورود
              </button>
            </div>
            {/* <p className='text-center'>
              <Link to='/forgotpassword' className='btn text-dark'>
                بازیابی رمز عبور
              </Link>
            </p> */}
            {/* <p className='text-center btn byn-block btn-success'>
              <Link to='/signup' className='btn text-light'>
                ثبت نام{' '}
              </Link>
            </p> */}
          </form>
        </div>
        <div className='col col-sm-2'></div>
      </div>
    </div>
  );
};

export default Login;
