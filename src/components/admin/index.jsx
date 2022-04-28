import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [data, setData] = useState(['']);
  // function deleteData(){
  //   axios.
  // }
  function updateData() {
    axios
      .get('https://fitlinez-backend.herokuapp.com/updateProfile')
      .then((res) => {
        setData(res.data);
        console.log(res.data[0].date);
      });
  }
  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className='container'>
      <h1>List</h1>
      <table className='table table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th className='col'>نام</th>
            <th className='col'>سن</th>
            <th className='col'>تاریخ عضویت</th>
            <th className='col'>فعالیت</th>
            <th className='col'>قد</th>
            <th className='col'>هدف</th>
            <th className='col'>جنسیت</th>
            <th className='col'>وزن</th>
            <th className='col'>توضیحات</th>
          </tr>
        </thead>

        {data.map((d) => (
          <tbody>
            <tr>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.date}</td>
              <td>{d.height}</td>
              <td>{d.target}</td>
              <td>{d.gender}</td>
              <td>{d.weight}</td>
              <td>{d.comment}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AdminHome;
