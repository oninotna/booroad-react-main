import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalPeople({people}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dettagli viaggiatore
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {people.firstName} {people.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="d-block my-2">
            <strong>Codice fiscale: </strong>
            {people.idCode}
          </span>
          <span className="d-block my-2">
            <strong>Email: </strong>
            {people.email}
          </span>
          <span className="d-block my-2">
            <strong>Numero telefonico: </strong>
            {people.phone}
          </span>
        </Modal.Body>
      </Modal>
    </>
  );
};