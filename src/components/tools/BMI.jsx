import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactSpeedometer from 'react-d3-speedometer';
import { Link } from 'react-router-dom';

import Input from '../input';
export default function BMI() {
  const navigate = useNavigate();

  let [result, setResult] = useState(0);
  const resultText = [
    {
      id: 1,
      title: ' کمبود وزن:',
      description:
        'شما دچار کمبود وزن هستید، بنابراین شاید نیاز باشد کمی وزن اضافه کنید. توصیه می‌کنیم از پزشک یا مشاور تغذیه خود کمک بگیرید.',

      color: 'warning',
      min: 1,
      max: 18.4,
    },
    {
      id: 2,
      title: 'نرمال: ',
      description:
        'نشان می‌دهد نسبت به قدتان وزن مناسبی دارید. با تثبیت وزنی سالم، جلوی بالا رفتن خطرهای جدی برای سلامت‌تان را می‌گیرید.',

      color: 'success',
      max: 25,
      min: 18.5,
    },
    {
      id: 3,
      title: 'اضافه وزن: ',
      description:
        'کمی دچار اضافه وزن هستید و نیاز دارید مقداری وزن کم کنید. برای کاهش وزن می‌توانید با آذر مشورتی داشته باشید.',

      color: 'warning',
      min: 25.1,
      max: 30,
    },
    {
      id: 4,
      title: 'اضافه وزن شدید: ',
      description:
        'وزن بالایی دارید. اگر وزن کم نکنید مسلما سلامت‌تان به خطر خواهد افتاد ',

      color: 'danger',
      min: 30.1,
      max: 35,
    },
  ];

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function bmiCalc() {
    setResult((weight / ((height / 100) * (height / 100))).toFixed(1));
    navigate('#result');
  }

  const message = resultText.filter(
    (item) => item.max >= result && item.min <= result
  );
  return (
    <div className="container">
      <h1 className="m-2">محاسبه BMI</h1>
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6">
              {result <= 45 && (
                <ReactSpeedometer
                  minValue={0}
                  maxValue={45}
                  needleHeightRatio={1}
                  value={result}
                  currentValueText=""
                  customSegmentStops={[0, 16, 18.5, 25, 30, 35, 40, 45]}
                  segmentColors={[
                    '#D38788',
                    '#FEE400',
                    '#028137',
                    '#FFE400',
                    '#D38788',
                    '#BC2020',
                    '#8A0102',
                  ]}
                  ringWidth={47}
                  needleTransitionDuration={3333}
                  needleTransition="easeElastic"
                  needleColor={'#90f2ff'}
                  textColor={'#d8dee9'}
                />
              )}
              {result > 0 && (
                <>
                  <span id="result">
                    <h2>
                      شاخص توده بدنی شما: <b>{result}</b>
                    </h2>
                  </span>
                  <h2 className={`badge badge-${message[0].color}`}>
                    {message[0].title}
                  </h2>
                  <span>{message[0].description}</span>
                </>
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
              <Input
                type="range"
                min="30"
                max="170"
                required
                name="weight"
                label={`وزن : ${weight}`}
                step="0.5"
                className="form-control-range"
                onChange={(e) => setWeight(e.target.value)}
              />

              <Input
                type="range"
                required
                min="120"
                max="220"
                step="0.5"
                name="height"
                label={`قد : ${height}`}
                className="form-control-range"
                onChange={(e) => setHeight(e.target.value)}
              />

              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={bmiCalc}>
                  محاسبه
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12"></div>
      </div>
    </div>
  );
}
