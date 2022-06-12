import React, { useState, useEffect } from 'react';
import Input from '../input';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
export default function Calories() {
  const [result, setResult] = useState('');
  const [userData, setUserData] = useState({
    age: 0,
    height: 0,
    gender: '',
    weight: 0,
    activity: '',
  });
  useEffect(() => {
    axios
      .request({
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
        params: {
          age: parseInt(userData.age),
          gender: userData.gender,
          height: parseInt(userData.height),
          weight: parseInt(userData.weight),
          activitylevel: userData.activity,
        },
        headers: {
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
          'X-RapidAPI-Key':
            '27429b439dmshcf048a7e893b633p10a32ajsn1c3ee8db4371',
        },
      })
      .then(function (response) {
        setResult(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          {result && (
            <div class="container mt-5">
              <div class="notice notice-success h5">
                <strong>کالری تقریبی متابولیسم پایه </strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.BMR)}
                </span>
              </div>
              <div class="notice notice-info h5">
                <strong>کالری تقریبی تثبیت وزن</strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['maintain weight'])}
                </span>
              </div>
              <div class="notice notice-danger h5">
                <strong>کالری تقریبی برای کاهش وزن ۱ کیلو در هفته</strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['Extreme weight loss']['calory'])}
                </span>
                <div class="notice notice-danger text-danger">
                  توصیه میشود یک فرد بالغ کمتر از ۱۲۰۰ کالری در روز مصرف نکند
                </div>
              </div>
              <div class="notice notice-warning h5">
                <strong>کالری تقریبی برای کاهش ۲۵۰ گرم در هفته</strong>

                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['Mild weight loss']['calory'])}
                </span>
              </div>

              <div class="notice notice-sm h5">
                <strong>نکته:</strong> برای محاسبه دقیقتر به متخصص تغدیه مراجعه
                کنید
              </div>
            </div>
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
        <div className="col-sm-6 mt-3">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              alert('کالری پایه کمتر از ۱۲۰۰ برای بزرگ');
            }}>
            <Input required name="weight" label="*وزن" onChange={handleInput} />
            <Input
              required
              name="age"
              label="*سن"
              value={userData.age}
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
            <div className="form-group">
              <label htmlFor="inputState">*میزان فعالیت </label>
              <select
                className="form-control"
                name="activity"
                onChange={handleInput}
                value={userData.activity}>
                <option selected></option>
                <option value="level_1">بدون تحرک</option>
                <option value="level_2">یک تا سه روز در هفته</option>
                <option value="level_3">چهار تا پنج روز در هفته</option>
                <option value="level_4">
                  ورزش روزانه / ورزش شدید سه تا جهار روز در هفته
                </option>
                <option value="level_5">ورزش شدید تقریبا هر روز</option>
                <option value="level_6">ورزش شدید روزانه/ کار فیزیکی</option>
              </select>
            </div>
            <div className="form-group">
              {/* <button
                className="btn btn-primary btn-block"
                onClick={handleClick}
                type="submit">
                محاسبه
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
