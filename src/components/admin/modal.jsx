import React from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const ModalView = (props) => {
  return (
    <Modal dialogClassName='modal-90w' show={props.show}>
      <Modal.Header>
        <Modal.Title>جزییات</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <Form.Label>نام</Form.Label>
              <Form.Control type='text' value={props.modalData.name} disabled />

              <Form.Label>تاریخ عضویت</Form.Label>
              <Form.Control type='text' value={props.modalData.date} disabled />
              <Form.Label>سن</Form.Label>
              <Form.Control type='text' value={props.modalData.age} disabled />
              <Form.Label>توضیحات</Form.Label>
              <Form.Control
                type='text'
                value={props.modalData.comment}
                disabled
              />
            </Col>
            <Col>
              <Form.Label>میزان فعالیت</Form.Label>
              <Form.Control
                type='text'
                value={props.modalData.activity}
                disabled
              />

              <Form.Label>جنسیت</Form.Label>
              <Form.Control
                type='text'
                value={props.modalData.gender}
                disabled
              />
              <Form.Label>وزن</Form.Label>
              <Form.Control
                type='text'
                value={props.modalData.weight}
                disabled
              />
              <Form.Label>قد</Form.Label>
              <Form.Control
                type='text'
                value={props.modalData.height}
                disabled
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalView;
