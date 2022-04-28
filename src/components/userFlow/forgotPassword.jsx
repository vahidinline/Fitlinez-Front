import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from './authContent';
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='container' style={{ direction: 'ltr' }}>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <h1>فراموشی رمز عبور</h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              forgotPassword(email)
                .then((res) => {
                  alert({
                    message: 'Done. you can check your inbox for next step',
                    type: 'info',
                  });
                })
                .then((res) => {
                  navigate('/');
                })
                .catch((err) =>
                  alert({ message: 'Wrong Email', type: 'warning' })
                );
            }}
          >
            <div class='form-group'>
              <label htmlFor='exampleInputEmail1'>آدرس ایمیل</label>

              <div class='input-group'>
                <div class='input-group-prepend'>
                  <span class='input-group-text'>
                    <i class='fa fa-user'></i>
                  </span>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control'
                  name='email'
                  type='email'
                  required={true}
                />
              </div>
            </div>

            <div className='form-group'>
              <button className='btn btn-primary btn-block' type='submit'>
                <></>
                ارسال{' '}
              </button>
            </div>
          </form>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
