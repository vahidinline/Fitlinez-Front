import React, { useState } from 'react';
import Package from './package';
import './style.css';
const PriceE = () => {
  return (
    <>
      <Package
        id="One"
        name="مشاوره تغذیه"
        price="۷۰۰،۰۰۰"
        description="یک جلسه نیم ساعته"
        line1="مشاوره تغذیه و لایف استایل"
        line2="پاسخگویی به سوالات برای سی دقیقه بصورت ویدئو کال"
        line3=""
        url="https://zarinp.al/423697"
        sign="تومان"
        featured
        oldPrice
        disabled="false"
        buttonLabel="خرید"
      />
      <Package
        id="Two"
        name="دوره کوچینگ تغذیه"
        price="۲،۹۰۰،۰۰۰"
        description="یک ماه"
        url="https://zarinp.al/423704"
        sign="تومان"
        line1="مشاوره تغذیه و لایف استایل اختصاصی"
        line2="با توجه به نیاز و هدف متقاضی"
        line3="چهار جلسه نیم ساعته در ماه بصورت ویدئو کال "
        featured
        oldPrice
        disabled="false"
        buttonLabel="خرید"
      />
      <Package
        id="Three"
        name="دوره کوچینگ تغذیه"
        price="۶،۹۷۵،۰۰۰"
        description="سه ماه"
        url="https://zarinp.al/423709"
        sign="تومان"
        line1="مشاوره تغذیه و لایف استایل اختصاصی"
        line2="با توجه به نیاز و هدف متقاضی"
        line3="دوازده جلسه نیم ساعته در سه ماه بصورت ویدئو کال "
        line4="دوره کوچینگ تغذیه به مدت سه ماه به ارزش ۸،۷۰۰،۰۰۰ تومان. پرداختی شما ۶،۹۷۵،۰۰ تومان"
        featured={'توصیه شده'}
        oldPrice=" ارزش واقعی دوره: ۸,۷۰۰,۰۰۰ تومان "
        disabled="false"
        buttonLabel="خرید"
      />
    </>
  );
};
export default PriceE;
