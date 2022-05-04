import React, { Component, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import 'react-custom-alert/dist/index.css';

import Form from './form';

export default function Profile() {
  const search = useLocation().search;

  const token = new URLSearchParams(search).get('Status');
  console.log(token);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (token === 'OK') {
      setIsShow(true);
    }
  }, []);

  return <>{isShow ? <Form /> : <h1>Access Denied</h1>};</>;
}
