import React, { useState } from 'react';
import Package from './package';
import PriceR from './price-r';
import PriceE from './priceE';
import './style.css';
const PriceList = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='container'>
      {show && (
        <div className=' text-center mt-5 '>
          <button
            className='btn btn-lg btn-success mb-5'
            onClick={() => setShow(!show)}
          >
            برای مشاهده و پرداخت معادل ریالی لطفا کلیک کنید
          </button>

          <PriceR />
        </div>
      )}

      {!show && (
        <div className=' text-center mt-5 '>
          <button
            className='btn btn-lg btn-success mb-5'
            onClick={() => setShow(!show)}
          >
            برای مشاهده و پرداخت معادل ارزی لطفا کلیک کنید
          </button>

          <PriceE />
        </div>
      )}
    </div>
  );
};

export default PriceList;
