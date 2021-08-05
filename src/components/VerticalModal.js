import map from 'lodash/map';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { CHAIR, COFFEE_TABLE, DINING_TABLE, MODAL_MODE } from '../constants';

const ShorterNames = (name) => {
  return name.length > 15 ? name.substring(0, 11) + '...' : name;
};

const VerticalModal = ({ onHide, header, mode, setCurrentChairId, setCurrentTableId }) => {

  const setTable = (id, type) => {
    setCurrentTableId(id, type);
    onHide();
  };

  const setChair = (id) => {
    setCurrentChairId(id);
    onHide();
  };

  const renderSelectableObjects = () => {
    let toReturn;

    switch (mode) {
      case MODAL_MODE.CHAIR:
        toReturn = map(CHAIR, (data, id) => (
          <Button
            onClick={() => setChair(id)}
            key={id}
          >
            {ShorterNames(data.LABEL)}
          </Button>
        ));
        break;
      case MODAL_MODE.COFFEE_TABLE:
        toReturn = map(COFFEE_TABLE, (data, id) => (
          <Button onClick={() => setTable(id, 'COFFEE')} key={id}>
            {ShorterNames(data.LABEL)}
          </Button>
        ));
        break;
      case MODAL_MODE.DINING_TABLE:
        toReturn = map(DINING_TABLE, (data, id) => (
          <Button onClick={() => setTable(id, 'DINING')} key={id}>
            {ShorterNames(data.LABEL)}
          </Button>
        ));
        break;
      default:
        break;
    }

    return toReturn;
  };

  return (
    <Modal
      show
      onHide={onHide}
      header={header}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderSelectableObjects()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerticalModal;
