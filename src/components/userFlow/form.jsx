import React, { useState, useEffect } from 'react';
import Joi from 'joi-browser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../input';
import { AlertContainer, alert } from 'react-custom-alert';
export default function Form() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    height: '',
    target: '',
    comment: '',
    gender: '',
    weight: '',
    activity: '',
  });
  console.log(typeof userData.isPaid);
  const navigate = useNavigate();
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
        console.log(res.data);
        setUserData(res);
        alert({ message: 'اطلاعات شما ثبت شد.', type: 'success' });
        //setIsSubmitting(true);
        navigate('/');
      })
      .catch((e) => {
        alert({ message: e.message, type: 'error' });
      });
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>
          <h1 className='m-5 text-center'>فرم اطلاعات کاربری</h1>
          <span className='text-center text-warning'></span>
          <form
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
            <div className='form-group'>
              <label Htmlfor='inputState'>*جنسیت</label>
              <select
                className='form-control'
                name='gender'
                onChange={handleInput}
                value={userData.gender}
              >
                <option selected></option>
                <option value='خانم'>خانم</option>
                <option value='آقا'>آقا</option>
              </select>
            </div>
            <div className='form-group'>
              <label Htmlfor='inputState'>*هدف تناسب اندامی</label>
              <select
                className='form-control'
                name='target'
                onChange={handleInput}
                value={userData.target}
              >
                <option selected></option>
                <option value='بادی کامپوزیشن'>بادی کامپوزیشن</option>
                <option value='افزایش وزن'>افزایش وزن</option>
                <option value='کاهش وزن'>کاهش وزن</option>
              </select>
            </div>
            <div className='form-group'>
              <label Htmlfor='inputState'>*میزان فعالیت </label>
              <select
                className='form-control'
                name='activity'
                onChange={handleInput}
                value={userData.activity}
              >
                <option selected></option>
                <option value='زیر سه روز در هفته'>زیر سه روز در هفته</option>
                <option value='سه تا پنج روز در هفته'>
                  سه تا پنج روز در هفته
                </option>
                <option value='بیش از پنج روز در هفته'>
                  بیش از پنج روز در هفته
                </option>
              </select>
            </div>

            <Input
              name='comment'
              label='*هدف شما از ثبت نام در این دوره چیست '
              value={userData.comment}
              onChange={handleInput}
            />
            <div className='form-group'>
              <button className='btn btn-primary btn-block' type='submit'>
                ثبت اطلاعات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
