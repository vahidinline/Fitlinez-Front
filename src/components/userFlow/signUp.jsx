import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContent';
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  function errorFunc(error) {
    const m = error.message;
    if (m === 'Firebase: Error (auth/email-already-in-use).')
      alert({
        message: 'The email address is already in use by another account.',
        type: 'error',
      });
    if (m === 'auth/invalid-email')
      alert({
        message: 'The email address is badly formatted.',
        type: 'error',
      });
  }
  return (
    <div className='container' style={{ direction: 'ltr' }}>
      <div className='row'>
        <div className='col col-sm-2'></div>

        <div className='col col-sm-8'>
          <h1 className='text-center m-5'>عضویت در فیت لاینز </h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(email, password);
              setIsSubmitting(true);
              register(email, password)
                .then((res) => navigate('/price'))
                .catch((error) =>
                  errorFunc(error).finally(() => setIsSubmitting(false))
                );
            }}
          >
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>ایمیل</label>
              <div class='input-group'>
                <div class='input-group-prepend'>
                  <span class='input-group-text'>
                    <i class='fa fa-user'></i>
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
            <div class='form-group'>
              <label htmlFor='exampleInputPassword1'>رمز عبور</label>

              <div class='input-group'>
                <div class='input-group-prepend'>
                  <span class='input-group-text'>
                    <i class='fa fa-lock'></i>
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
              <button
                className='btn btn-primary btn-block'
                isLoading={isSubmitting}
                type='submit'
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <div className='col col-sm-2'></div>
      </div>
    </div>
  );
}
// }
