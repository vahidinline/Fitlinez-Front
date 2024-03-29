import React, { useState } from 'react';
import Package from './package';
import './style.css';
const PriceR = () => {
  return (
    <>
      <Package
        id="One"
        name="Nutrition Consultation"
        price="25"
        description="30-minute Session"
        url="https://buy.stripe.com/6oEbJY53mf3MdZ68wI"
        sign="€"
        featured
        oldPrice
        disabled="false"
        buttonLabel="Get started"
      />
      <Package
        id="Two"
        name="Nutrition Coaching"
        price="97"
        description="Monthly, 4 sessions"
        url="https://buy.stripe.com/dR64hw1Ra9Js4owcMQ"
        sign="€"
        featured
        oldPrice
        disabled="false"
        buttonLabel="Get started"
      />
      <Package
        id="Three"
        name="Nutrition Coaching"
        price="235"
        description="Tree Months, 12 sessions"
        url="https://buy.stripe.com/4gwaFU3ZicVE3ks6ou"
        sign="€"
        featured={'Best Value'}
        oldPrice="291"
        disabled="false"
        buttonLabel="Get started"
      />
    </>
  );
};
export default PriceR;
