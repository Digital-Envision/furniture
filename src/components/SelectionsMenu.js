import React from 'react';
import Button from 'react-bootstrap/Button';
import VerticalModal from './VerticalModal';
import { MODAL_MODE } from '../constants';
import '../CSS/SelectionsMenu.css';

const SelectionsMenu = ({ setCurrentChairId, setCurrentTableId }) => {
  const [show, setShow] = React.useState(false);
  const [modalHeader, setModalHeader] = React.useState('');
  const [mode, setMode] = React.useState(null); // one of MODAL_MODE

  const modalHandler = (header, mode) => {
    setModalHeader(header);
    setMode(mode);
    setShow(true);
  };

  return (
    <>
      <div className="selection-buttons">
        <Button
          variant="glass"
          onClick={() => modalHandler('Select a Chair', MODAL_MODE.CHAIR)}
        >
          Select a Chair
        </Button>
        <Button
          variant="glass"
          onClick={() =>
            modalHandler('Select a Coffee Table', MODAL_MODE.COFFEE_TABLE)
          }
        >
          Select a Coffee Table
        </Button>
        <Button
          variant="glass"
          onClick={() =>
            modalHandler('Select a Dining Table', MODAL_MODE.DINING_TABLE)
          }
        >
          Select a Dining Table
        </Button>
      </div>

      {show && (
        <VerticalModal
          onHide={() => setShow(false)}
          header={modalHeader}
          mode={mode}
          setCurrentChairId={setCurrentChairId}
          setCurrentTableId={setCurrentTableId}
        />
      )}
    </>
  );
};

export default SelectionsMenu;
