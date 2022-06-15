import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalView from './modal';
const AdminHome = () => {
  const [data, setData] = useState(['']);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [modalData, setModalData] = useState();
  const handleShow = (d) => {
    setShow(true);
    setModalData(d);
  };
  function updateData() {
    axios.get('https://fitlinez-backend.herokuapp.com/cta').then((res) => {
      setData(res.data);
      console.log(data);
    });
  }
  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className="container">
      <h1>List</h1>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th className="col">نام</th>
            <th className="col">تاریخ عضویت</th>
            <th>مشاهده جزییات</th>
          </tr>
        </thead>

        {data.map((d) => (
          <tbody>
            <tr>
              <td>{d.name}</td>

              <td>{d.email}</td>

              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleShow(d)}
                  variant="primary">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {modalData && (
        <ModalView
          modalData={modalData}
          show={show}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default AdminHome;
