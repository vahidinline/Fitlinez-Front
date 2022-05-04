import React from 'react';
import axios from 'axios';
import { useAuth } from '../components/userFlow/authContent';
import { Link } from 'react-router-dom';
import './style.css';

const Package = (props) => {
  const { currentUser } = useAuth();
  //--------Start Rial Handle Payment
  const handlePaymentRial = async (price, userEmail, name) => {
    console.log(userEmail);
    const result = await axios.post(
      'https://fitlinez-backend.herokuapp.com/order',
      {
        price: price,
        email: 'userEmail',
        phone: '09122270114',
        description: 'name',
      }
    );
  };
  //--------End Rial Handle Payment

  return (
    <div className='accordion' id='accordionExample'>
      <div className='card'>
        <sup>
          <span class='badge badge-success'>{props.featured}</span>
        </sup>
        <div className='card-header' id={'heading' + props.id}>
          <h2 className='mb-0'>
            <button
              className='btn btn-block'
              type='button'
              data-toggle='collapse'
              data-target={'#collapse' + props.id}
              aria-expanded='false'
              aria-controls={'collapse' + props.id}
            >
              <span>
                <h4 className='text-decoration-none'>
                  {props.name}/{props.description} -
                  <span className='font-weight-bold'>
                    {props.sign} {props.price}
                  </span>
                </h4>
              </span>

              <h3 className='font-weight-bold'></h3>
              <br />

              <del className='h3 font-weight-bold text-secondary'>
                {props.oldPrice}
              </del>
            </button>
          </h2>
        </div>

        <div
          id={'collapse' + props.id}
          className='collapse show'
          aria-labelledby={'heading' + props.id}
          data-parent='#accordionExample'
        >
          <div className='card-body'>
            <ul className='list-unstyled' style={{ paddingRight: '0px' }}>
              <li>{props.line1}</li>
              <li>{props.line2}</li>
              <li>{props.line3}</li>
              <li>{props.line4}</li>
            </ul>

            <a
              href={props.url}
              type='button'
              className='btn btn-outline-success mb-3'
            >
              Order now
            </a>

            {/* {!currentUser && (
              <Link
                to='/login'
                type='button'
                role='button'
                className='btn btn-outline-primary mb-3'
              >
                Register or Login
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
