import { Button, Modal } from 'react-bootstrap';
import React from 'react';

const VerticalModal = (props) => {
  const ShorterNames = (name) => {
    return name.length > 15 ? name.substring(0, 11) + '...' : name;
  };

  const SetTable = (models, mode) => {
    props.SetTable(models, mode);
    props.onHide();
  };

  const SetChair = (models) => {
    props.SetChair(models);
    props.onHide();
  };

  const SelectableObjects = (mode) => {
    let toReturn;

    switch (mode) {
      case 'Chairs':
        const allChair = props.allChair;
        toReturn = allChair.map((obj) => (
          <>
            <Button
              onClick={() => {
                SetChair(obj);
              }}
            >
              {ShorterNames(obj['name'])}
            </Button>
          </>
        ));
        break;
      case 'CoffeeTables':
        const allCoffee = props.allCoffee;
        toReturn = allCoffee.map((obj) => (
          <>
            <Button onClick={() => SetTable(obj)}>{ShorterNames(obj)}</Button>
          </>
        ));
        break;
      case 'DiningTables':
        const allDining = props.allDining;
        toReturn = allDining.map((obj) => (
          <>
            <Button onClick={() => SetTable(obj)}>{ShorterNames(obj)}</Button>
          </>
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
        {!props.hide && SelectableObjects(props.currentMode)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerticalModal;
