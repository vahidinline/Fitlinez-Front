import React, { useEffect, useState } from 'react';
import banner from '../assets/banner.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import cert from '../assets/cert.png';
import Team from './team';

const HomeTop = () => {
  const [contents, setContents] = useState([
    {
      title: 'Azar Shafiei, nutrition coach',
      description: '',
      h1: '',
      h2: '',
      body: '',
    },
  ]);
  // useEffect(() => {
  //   fetch("https://evening-savannah-15712.herokuapp.com/staticPage")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setContents(jsonRes));
  // });
  return (
    <div className='container-full'>
      <meta charSet='utf-8' />
      {/* {contents.length > 0 &&
        contents.map((content) => ( */}
      <Helmet>
        <title>آذر شفیعی - نوتریشن کوچ - مربی تغذیه</title>
        <meta name='description' content={contents.description} />
      </Helmet>
      {/* ))} */}
      <div className='row'>
        <div className='col-lg-6 left-image'>
          <img className='img-fluid m-5' src={banner} />
        </div>
        <div className='col-lg-6 ml-auto'>
          <div className=''>
            <span className='badge badge-info rounded-pill px-3 py-1 font-weight-light'></span>
            {/* {contents.map((content) => ( */}
            <>
              <h3
                className='my-3 text-uppercase'
                style={{ textAlign: 'right' }}
              >
                کوچینگ کمک به افراد برای تغییر‌دادن عادات و حرکت در مسیر مطلوب
                است
              </h3>
              <div style={{ textAlign: 'right' }}>
                نوتریشن کوج به شما کمک میکند تا با عادت سازی و اصلاح رفتارهای
                غذایی مسئولیت سلامت و تناسب اندام خود را در دست بگیرید.
              </div>
            </>
            {/* ))} */}
            <div className='row mt-3'>
              <div className='col-md-12'>
                <div
                  className='card card-shadow border-0 mb-3'
                  style={{ background: '#06113C', textAlign: 'right' }}
                >
                  <div className='card-body'>
                    <div className='row p-3'>
                      <img src={cert} className='img-fluid' />
                      <p className='op-8 pt-4' dir='rtl'>
                        <div class='alert alert-success ' role='alert'>
                          اگر قصد دارید فردی را یک وعده سیر کنید، به او ماهی
                          بدهید؛ اما اگر می‌خواهید او را تا آخر عمر سیر کنید، به
                          او ماهیگیری یاد دهید!
                        </div>
                      </p>
                      <div className='col-12 border-right'>
                        <Link
                          type='button'
                          to='/price'
                          className='btn btn-outline-success btn-lg btn-block text-light'
                        >
                          دوره ها
                        </Link>
                      </div>
                      {/* <div className='col-6 text-right border-left'>
                        <button
                          type='button'
                          className='btn btn-primary btn-lg btn-block'
                          style={{ background: '#035397' }}
                        >
                          <Link
                            className='text-decoration-none text-light'
                            to='/login'
                          >
                            ورود
                          </Link>
                        </button>
                      </div> */}
                      <div className='col-lg-12 mt-3'>
                        <Link
                          className='btn btn-success-gradiant btn-md btn-block'
                          to='/about'
                        >
                          <span className='text-white'>بیشتر بدانید</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
