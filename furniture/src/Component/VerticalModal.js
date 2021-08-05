import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import { useModal } from './ModalContext';

const VerticalModal = (props) => {
  const ShorterNames = (name) => {
    return name.length > 15 ? name.substring(0, 11) + '...' : name;
  };

  const { SetChairFunc, SetTableFunc, currentMode } = useModal();

  const SetTable = (models, mode) => {
    SetTableFunc.current(models, mode);
    props.onHide();
  };

  const SetChair = (models) => {
    SetChairFunc.current(models);
    props.onHide();
  };

  const SelectableObjects = (mode) => {
    let toReturn;

    switch (mode) {
      case 'Chairs':
        const allChair = props.allChair;
        toReturn = allChair.map((obj) => (
          <Button
            onClick={() => {
              SetChair(obj);
            }}
            key={obj['name']}
          >
            {ShorterNames(obj['name'])}
          </Button>
        ));
        break;
      case 'CoffeeTables':
        const allCoffee = props.allCoffee;
        toReturn = allCoffee.map((obj) => (
          <Button onClick={() => SetTable(obj, 'Coffee')} key={obj}>
            {ShorterNames(obj)}
          </Button>
        ));
        break;
      case 'DiningTables':
        const allDining = props.allDining;
        toReturn = allDining.map((obj) => (
          <Button onClick={() => SetTable(obj, 'Dining')} key={obj}>
            {ShorterNames(obj)}
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
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please {props.header.toLowerCase()}</h4>
        {props.onHide}
        {!props.hide && SelectableObjects(currentMode)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerticalModal;
