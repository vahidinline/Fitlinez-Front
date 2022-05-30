import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSpeedometer from 'react-d3-speedometer';

import Input from '../input';
import fitnessCalculatorFunctions from 'fitness-calculator';
export default function Bfp() {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const [userData, setUserData] = useState({
    height: 181,
    gender: 'female',
    weight: 82,
    neck: 35,
    waist: 80,
    hip: 90,
  });

  const { gender, height, weight, neck, waist, hip } = userData;
  const myBFP = fitnessCalculatorFunctions.BFP(
    gender,
    Number(height),
    Number(weight),
    Number(neck),
    Number(waist),
    Number(hip)
  );
  console.log(myBFP);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 padding-left-sm">
          {myBFP > 0 && (
            <ReactSpeedometer
              minValue={1}
              maxValue={100}
              value={myBFP}
              fluidWidth={false}
              currentValueText={`Body Fat % ${myBFP}`}
              customSegmentStops={[1, 2, 6, 14, 18, 25, 100]}
              segmentColors={[
                '#BC2020',
                '#FEE400',
                '#14C38E',
                '#028137',
                '#FEE400',
                '#BC2020',
                '#000000',
              ]}
              ringWidth={47}
              needleTransitionDuration={3333}
              needleTransition="easeElastic"
              needleColor={'#90f2ff'}
              textColor={'#d8dee9'}
            />
          )}
          <div
            className="btn-group"
            style={{ direction: 'ltr' }}
            role="group"
            aria-label="Basic example">
            <Link to="/bmi" type="button" class="btn btn-primary">
              محاسبه BMI
            </Link>
            <Link to="/calories" type="button" class="btn btn-success">
              محاسبه کالری نقصان
            </Link>
            <Link to="/bfp" type="button" class="btn btn-info">
              محاسبه چربی بدن{' '}
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // Calc();
            }}>
            <Input required name="weight" label="*وزن" onChange={handleInput} />
            <Input
              required
              name="neck"
              label="*دور گردن"
              value={userData.neck}
              onChange={handleInput}
            />
            <Input
              required
              name="waist"
              label="*دور کمر "
              value={userData.waist}
              onChange={handleInput}
            />

            <Input required name="height" label="*قد" onChange={handleInput} />
            <div className="form-group">
              <label htmlFor="inputState">*جنسیت</label>
              <select
                className="form-control"
                name="gender"
                onChange={handleInput}
                value={userData.gender}>
                <option selected></option>
                <option value="female">خانم</option>
                <option value="male">آقا</option>
              </select>
            </div>
            {userData.gender === 'female' && (
              <Input
                required
                name="hip"
                label="*دور باسن"
                value={userData.hip}
                onChange={handleInput}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
