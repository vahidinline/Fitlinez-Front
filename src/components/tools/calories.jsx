import React, { useState, useEffect } from 'react';
import Input from '../input';
import axios from 'axios';
import './style.css';
export default function Calories() {
  const [result, setResult] = useState('');
  const [show, setShow] = useState(true);
  const [userData, setUserData] = useState({
    age: null,
    height: null,
    gender: null,
    weight: null,
    activity: null,
    email: null,
    name: null,
  });
  useEffect(() => {}, [userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleStore = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/cta`, {
        userData,
      })
      .then((res) => {
        setShow(false);
      })
      .catch((e) => {});
  };

  const handleSubmit = () => {
    axios
      .request({
        method: 'GET',
        url: process.env.REACT_APP_API_URL_CALORIES,
        params: {
          age: parseInt(userData.age),
          gender: userData.gender,
          height: parseInt(userData.height),
          weight: parseInt(userData.weight),
          activitylevel: userData.activity,
        },
        headers: {
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        },
      })
      .then(function (response) {
        setResult(response.data.data);
        handleStore();
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          {result && (
            <div className="container mt-5">
              <div className="notice notice-success h5">
                <strong>کالری تقریبی متابولیسم پایه </strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.BMR)}
                </span>
              </div>
              <div className="notice notice-info h5">
                <strong>کالری تقریبی تثبیت وزن</strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['maintain weight'])}
                </span>
              </div>
              {/* <div className="notice notice-danger h5">
                <strong>کالری تقریبی برای کاهش وزن ۱ کیلو در هفته</strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['Extreme weight loss']['calory'])}
                </span>
                <div className="notice notice-danger text-danger">
                  توصیه میشود یک فرد بالغ کمتر از ۱۲۰۰ کالری در روز مصرف نکند
                </div>
              </div> */}
              <div className="notice notice-warning h5">
                <strong>کالری تقریبی برای کاهش ۲۵۰ گرم در هفته</strong>

                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['Mild weight loss']['calory'])}
                </span>
              </div>

              <div className="notice notice-sm h5">
                <strong>نکته:</strong> برای محاسبه دقیقتر به متخصص تغدیه مراجعه
                کنید
              </div>
            </div>
          )}
        </div>

        <div className="col-sm-6 mt-3">
          {show && (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                handleSubmit();
              }}>
              <Input required name="name" label="*نام" onChange={handleInput} />
              <Input
                required
                name="email"
                label="*ایمیل"
                onChange={handleInput}
              />
              <Input
                required
                name="weight"
                label="*وزن"
                onChange={handleInput}
              />
              <Input
                required
                name="age"
                label="*سن"
                value={userData.age}
                onChange={handleInput}
              />
              <Input
                required
                name="height"
                label="*قد"
                onChange={handleInput}
              />
              <div className="form-group">
                <label htmlFor="inputState">*جنسیت</label>
                <select
                  className="form-control"
                  name="gender"
                  onChange={handleInput}
                  value={userData.gender}>
                  <option defaultValue></option>
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
                  <option defaultValue></option>
                  <option value="level_1">بدون تحرک</option>
                  <option value="level_2">یک تا سه روز در هفته</option>
                  <option value="level_3">چهار تا پنج روز در هفته</option>
                  <option value="level_4">
                    ورزش روزانه / ورزش شدید سه تا چهار روز در هفته
                  </option>
                  <option value="level_5">ورزش شدید تقریبا هر روز</option>
                  <option value="level_6">ورزش شدید روزانه/ کار فیزیکی</option>
                </select>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  محاسبه
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
