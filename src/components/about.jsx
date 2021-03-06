import React from 'react';
import { Link } from 'react-router-dom';
import about from '../assets/about.webp';
const About = () => {
  return (
    <div className='container'>
      <div className='row pt-5'>
        <div className='col'>
          {' '}
          <p>
            من آذر شفیعی هستم. دارنده مدرک کوچینگ تغذیه از موسسه
            precisionnutrition کانادا، یکی از معتبرترین مراکز آموزشی در زمینه
            تغدیه در دنیا.
          </p>
          <h2>قراره چی یاد بگیریم؟</h2>
          <p>
            برخلاف سایر روشهای کاهش وزن، کوچینگ تغذیه با هدف آموزش و اصلاح رفتار
            و عادت های مضر غذایی و ایجاد عادت های مفید برای زندگی شما بوجود
            اومده. در کوچینگ یاد میگیرید چگونه با قدمای کوچک، عادتهای غذایی و
            رفتاری مناسب با بدن خود را ایجاد کنید. این روند باعث میشود کاهش وزنی
            سلامت، بدون آسیب به بدن و برگشت ناپذیر داشته باشید
          </p>
          <h2>من به شما رژیم نمیدم</h2>
          <p>
            حتما بارها و بارها از متخصصین تغذیه رژیم گرفتی یا حتی رژیم دوست و
            آشنایی که به سرعت وزن کم کرده رو اجرا کردی. احتمالا یا نتیجه نگرفتی
            یا بعد از مدتی به وزن سابق یا حتی بیشتر از اون برگشتی. خب طبیعیه
            وقتی ندونی واقعا چه چیزی برای بدنت مفیده، وقتی فقط از روی یه تکه
            کاغذ بخوای رژیم بگیری یا به حرف افراد نااگاه گوش بدی نتیجه هم
            نمیگیری. تو کوچینگ قرار نیست خیلی کم بخوری چیزی که دوست نداری بخوری
            قراره یاد بگیری چه چیزی برای بدنت مفیده و باعث میشه به سلامت وزن کم
            کنی. مهمتر از کاهش وزن، فیت شدنه. تو کوچینگ قراره فیت بشی. قراره یه
            بدن جدید داشته باشی که مطمئنم عاشق میشی. قراره بدن قویتری داشته باشی
            و مهمتر از همه، همه اینا رو تا آخر عمرت خواهی داشت
          </p>
          <Link to='/price' role='button' className='btn btn-primary'>
            ثبت نام برای دوره های کوچینگ تغذیه
          </Link>
        </div>
        <div className='col'>
          <img src={about} />
        </div>
      </div>
    </div>
  );
};

export default About;
