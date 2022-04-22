import React, { useState } from 'react';
import Package from './package';
import './style.css';
const PriceR = () => {
  return (
    <>
      <Package
        id='One'
        name='Nutrition Consultation'
        price='17'
        description='One-Hour Session'
        url=''
        sign='€'
        featured
        oldPrice
      />
      <Package
        id='Two'
        name='Nutrition Coaching'
        price='97'
        description='Monthly, 4 sessions'
        url='https://buy.stripe.com/dR64hw1Ra9Js4owcMQ'
        sign='€'
        featured
        oldPrice
      />
      <Package
        id='Three'
        name='Nutrition Coaching'
        price='235'
        description='Tree Months, 12 sessions'
        url=''
        sign='€'
        featured={'Best Value'}
        oldPrice='291'
      />
      <Package
        id='Four'
        name='Private Workout'
        price='70'
        description='Monthly, 12 sessions'
        url=''
        sign='€'
        featured
      />
    </>
  );
};
export default PriceR;
