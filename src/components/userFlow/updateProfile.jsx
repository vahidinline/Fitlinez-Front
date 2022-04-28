import React, { Component, useState } from 'react';
import axios from 'axios';
import { useAuth } from './authContent';
import Input from '../input';
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  //console.log(JSON.stringify(currentUser, null, 2));
  //const email = currentUser.email;

  const email = currentUser ? currentUser.email : 'Email';
  const uid = currentUser ? currentUser.uid : 'uid';
  const [userData, setUserData] = useState({
    name: 'v',
    email: '',
    age: '',
    height: '1',
    target: '2',
    comment: '3',
    gender: 'f',
    weight: 'f',
    phone: '',
    activity: 'f',
    uid: uid,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  function updateUser(userData) {
    axios
      .post('https://fitlinez-backend.herokuapp.com/updateProfile', userData)
      .then((res) => {
        setUserData(res);
        alert({ message: 'success', type: 'success' });
        setIsSubmitting(true);
        navigate('/');
      })
      .catch((e) => {});
  }

  function retrieveData() {
    axios
      .get('https://fitlinez-backend.herokuapp.com/updateProfile')
      .then((res) => console.log(res));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <h1 className='m-5 text-center'>فرم اطلاعات کاربری</h1>
          <span className='text-center text-warning'>
            {' '}
            تمامی موارد ضروری هستند
          </span>
          <form
            className='m3'
            onSubmit={async (e) => {
              e.preventDefault();
              updateUser(userData).then((res) => {
                console.log(res).catch((e) => {
                  alert(e);
                });
              });
            }}
          >
            <Input
              required
              name='name'
              label='*نام'
              value={userData.name}
              onChange={handleInput}
            />
            <Input
              required
              name='email'
              label='*ایمیل'
              value={userData.email}
              onChange={handleInput}
            />
            <Input
              required
              name='age'
              label='*سن'
              value={userData.age}
              onChange={handleInput}
            />
            <Input
              required
              name='weight'
              label='*وزن'
              value={userData.weight}
              onChange={handleInput}
            />
            <Input
              required
              name='height'
              label='*قد'
              value={userData.height}
              onChange={handleInput}
            />

            <Input
              required
              name='gender'
              label='*جنسیت'
              placeholder='خانم یا آقا'
              value={userData.gender}
              onChange={handleInput}
            />
            <Input
              required
              name='target'
              label='*هدف تناسب اندامی'
              placeholder='کاهش وزن، افزایش وزن یا بادی کامپوزیشن'
              value={userData.target}
              onChange={handleInput}
            />
            <Input
              required
              name='activity'
              label='*میزان تحرک '
              placeholder='زیر 3 روز در هفته،3 تا 5 روز در هفته یا بالای 5 روز در هفته'
              value={userData.activity}
              onChange={handleInput}
            />
            <Input
              required
              name='comment'
              label='*هدف شما از ثبت نام در این دوره چیست '
              value={userData.comment}
              onChange={handleInput}
            />
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
          </form>
        </div>
      </div>
    </div>
  );
}
