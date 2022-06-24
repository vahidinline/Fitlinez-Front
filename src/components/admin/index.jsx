import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalView from './modal';
import { Table, Container } from 'react-bootstrap';

const AdminHome = () => {
  const [data, setData] = useState(['']);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [modalData, setModalData] = useState();
  const handleShow = (data) => {
    setShow(true);
    setModalData(data);
  };

  function updateData() {
    axios.get('https://fitlinez-backend.herokuapp.com/cta').then((res) => {
      setData(res.data);
    });
  }
  useEffect(() => {
    updateData();
  }, []);
  const handleDelete = (d) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cta/${d._id}`)
      //.then(() => alert('Delete successful'))
      .then(updateData())
      .finally(d.preventDefault());
  };
  return (
    // <Container>
    //   <h1>List of Members - {data.length}</h1>
    //   <Table striped="columns" hover>
    //     <thead className="thead-dark">
    //       <tr>
    //         <th className="col">ردیف</th>
    //         <th className="col">id</th>
    //         <th className="col">تاریخ</th>
    //         <th className="col">نام</th>
    //         <th>مشاهده جزییات</th>
    //         <th>delete</th>
    //       </tr>
    //     </thead>

    //     {data?.map((d, i) => (
    //       <tbody>
    //         <tr>
    //           <td>{i + 1}</td>
    //           <td>{d._id}</td>
    //           <td>{d.user?.name}</td>
    //           <td>{d.user?.email}</td>

    //           <td>
    //             <button
    //               className="btn btn-success"
    //               onClick={() => handleShow(d)}
    //               variant="primary">
    //               Details
    //             </button>
    //           </td>
    //           <td>
    //             <button
    //               className="btn btn-danger"
    //               onClick={() => handleDelete(d)}
    //               variant="primary">
    //               Delete
    //             </button>
    //           </td>
    //         </tr>
    //       </tbody>
    //     ))}
    //   </Table>
    //   {modalData && (
    //     <ModalView
    //       modalData={modalData}
    //       show={show}
    //       handleClose={handleClose}
    //     />
    //   )}
    // </Container>
  );
};

export default AdminHome;
