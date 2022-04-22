import React, { Component, useState } from 'react';
import axios from 'axios';
import { useAuth } from './authContent';
import Input from '../input';
export default function Profile() {
  const { currentUser } = useAuth();
  //console.log(JSON.stringify(currentUser, null, 2));
  //const email = currentUser.email;
  const initialUserData = {};

  const email = currentUser ? currentUser.email : 'Email';
  const uid = currentUser ? currentUser.uid : 'uid';
  const [userData, setUserData] = useState({
    name: '',
    email: email,
    age: '',
    gender: '',
    weight: '',
    phone: '',
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
      .post('http://localhost:3000/updateProfile', userData)
      .then((res) => {
        alert(res);
      })
      .catch((e) => alert(e.message));
  }

  function retrieveData() {
    axios
      .get('http://localhost:3000/updateProfile')
      .then((res) => console.log(res));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'></div>
        <div className='col-sm'>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              updateUser(userData).then((res) => {
                console.log('success', res).catch((e) => {
                  alert(e);
                });
              });
            }}
          >
            <Input
              name='name'
              label='نام'
              Value={userData.name}
              onChange={handleInput}
            />
            <Input
              name='age'
              label='سن'
              Value={userData.age}
              onChange={handleInput}
            />
            <Input
              name='weight'
              label='وزن'
              Value={userData.weight}
              onChange={handleInput}
            />
            <Input
              name='gender'
              label='جنسیت'
              Value={userData.gender}
              onChange={handleInput}
            />
            <Input
              name='phone'
              label='تلفن'
              Value={userData.phone}
              onChange={handleInput}
            />
            <div className='form-group'>
              <button className='btn btn-primary btn-block' type='submit'>
                Update Profile
              </button>
            </div>
          </form>
        </div>
        <div className='col-sm'>
          {/* <button onClick={retrieveData}>Get Data</button> */}
        </div>
      </div>
    </div>
  );
}
