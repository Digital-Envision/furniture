import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import VerticalModal from './VerticalModal';
import '../CSS/SelectionsMenu.css';
import { useModal } from './ModalContext';

const SelectionsMenu = ({
  allChair,
  allCoffee,
  allDining,
  setCurrentChair,
  setCurrentTable,
  SetChair,
  SetTable,
}) => {
  const [show, setShow] = useState(false);
  const [modalHeader, setModalHeader] = useState('');

  const { SetChairFunc, SetTableFunc, setCurrentMode } = useModal();

  const ModalHandler = (header, mode) => {
    setModalHeader(header);
    setCurrentMode(mode);
    setShow(true);
  };

  useEffect(() => {
    SetChairFunc.current = SetChair;
    SetTableFunc.current = SetTable;
  }, []);

  return (
    <>
      <div className="Selections-Buttons">
        <Button onClick={() => ModalHandler('Select a Chair', 'Chairs')}>
          Select a Chair
        </Button>
        <Button
          onClick={() => ModalHandler('Select a Coffe Table', 'CoffeeTables')}
        >
          Select a Coffe Table
        </Button>
        <Button
          onClick={() => ModalHandler('Select a Dining Table', 'DiningTables')}
        >
          Select a Dining Table
        </Button>
      </div>

      <VerticalModal
        show={show}
        onHide={() => setShow(false)}
        header={modalHeader}
        allChair={allChair}
        allCoffee={allCoffee}
        allDining={allDining}
      />
    </>
  );
};

export default SelectionsMenu;
