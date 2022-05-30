import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { useNavigate } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";

import Input from "../input";
import Chart from "react-google-charts";

import axios from "axios";
import fitnessCalculatorFunctions from "fitness-calculator";
export default function Macros() {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const [userData, setUserData] = useState({
    gender: "male",
    age: 39,
    height: 181,
    weight: 82,
    activity: "extreme",
    goal: "balance",
  });
  const data = [
    [
      "Fat",
      "Carb",
      "Protein",
      "suagr",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];
  const { gender, age, height, weight, activity, goal } = userData;
  const macros = fitnessCalculatorFunctions.macros(
    gender,
    Number(age),
    Number(height),
    Number(weight),
    activity,
    goal
  );
  console.log(macros);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-6 padding-left-sm'>
          <Chart
            chartType='ComboChart'
            width='100%'
            height='400px'
            data={data}
            options={{
              title: "Monthly Coffee Production by Country",
              vAxis: { title: "Cups" },
              hAxis: { title: "Month" },
              seriesType: "bars",
              series: { 5: { type: "line" } },
            }}
          />
        </div>
        <div className='col-sm-6'>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // Calc();
            }}>
            <Input required name='weight' label='*وزن' onChange={handleInput} />

            <Input required name='height' label='*قد' onChange={handleInput} />
            <div className='form-group'>
              <label htmlFor='inputState'>*جنسیت</label>
              <select
                className='form-control'
                name='gender'
                onChange={handleInput}
                value={userData.gender}>
                <option selected></option>
                <option value='female'>خانم</option>
                <option value='male'>آقا</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='inputState'>*فعالیت</label>
              <select
                className='form-control'
                name='activity'
                onChange={handleInput}
                value={userData.activity}>
                <option selected></option>
                <option value='sedentary'>sedentary</option>
                <option value='light'>light</option>
                <option value='moderate'>moderate</option>
                <option value='active'>active</option>
                <option value='extreme'>extreme</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='inputState'>*هدف</label>
              <select
                className='form-control'
                name='goal'
                onChange={handleInput}
                value={userData.goal}>
                <option selected></option>
                <option value='balance'>balance</option>
                <option value='mildWeightLoss'>mildWeightLoss</option>
                <option value='mildWeightGain'>mildWeightGain</option>
                <option value='heavyWeightLoss'>heavyWeightLoss</option>
                <option value='heavyWeightGain'>heavyWeightGain</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
