import React from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
const ModalView = (props) => {
  const handleUpdate = () => {
    props.handleClose();
  };
  console.log(props.modalData._id);
  return (
    <Modal dialogClassName="modal-90w" show={props.show}>
      <Modal.Header>
        <Modal.Title>جزییات</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label>نام</Form.Label>
              <Form.Control type="text" value={props.modalData.user.name} />

              <Form.Label>جنسیت </Form.Label>
              <Form.Control type="text" value={props.modalData.user.gender} />
              <Form.Label>قد</Form.Label>
              <Form.Control type="text" value={props.modalData.user.height} />
              <Form.Label>وزن</Form.Label>
              <Form.Control type="text" value={props.modalData.user.weight} />
            </Col>
            <Col>
              <Form.Label>میزان فعالیت</Form.Label>
              <Form.Control type="text" value={props.modalData.user.activity} />

              <Form.Label>سن</Form.Label>
              <Form.Control type="text" value={props.modalData.user.age} />
              <Form.Label>سن</Form.Label>
              <Form.Control type="text" value={props.modalData.user.age} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
