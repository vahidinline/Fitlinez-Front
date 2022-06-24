import React, { useState } from 'react';
import Package from './package';
import './style.css';
const PriceR = () => {
  return (
    <>
      <Package
        id="One"
        name="Nutrition Consultation"
        price="17"
        description="30-minute Session"
        url="https://buy.stripe.com/dR6aFU0N62h0aMU8wB"
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
      <Package
        id="Four"
        name="Private Workout"
        price="70"
        description="Monthly, 12 sessions"
        url=""
        sign="€"
        featured
        disabled="true"
      />
    </>
  );
};
export default PriceR;
