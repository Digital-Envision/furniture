import React from 'react';
import map from 'lodash/map';
import '../CSS/DropDown.css';
import { CHAIR, COFFEE_TABLE, DINING_TABLE, MODAL_MODE } from '../constants';

const ShorterNames = (name) => {
  return name.length > 30 ? name.substring(0, 29) + '...' : name;
};

const DropDown = ({
  currentChairId,
  setCurrentChairId,
  currentTableId,
  setCurrentTableId,
  currentBackgroundId,
}) => {
  const renderSelectableObjects = (mode) => {
    let toReturn;

    switch (mode) {
      case MODAL_MODE.CHAIR:
        toReturn = map(CHAIR, (data, id) => (
          <option value={id} key={id}>
            {ShorterNames(data.LABEL)}
          </option>
        ));
        break;
      case MODAL_MODE.COFFEE_TABLE:
        toReturn = map(COFFEE_TABLE, (data, id) => (
          <option value={id} key={id}>
            {ShorterNames(data.LABEL)}
          </option>
        ));
        break;
      case MODAL_MODE.DINING_TABLE:
        toReturn = map(DINING_TABLE, (data, id) => (
          <option value={id} key={id}>
            {ShorterNames(data.LABEL)}
          </option>
        ));
        break;

      default:
        break;
    }

    return toReturn;
  };

  const isCoffee = () => {
    return !currentTableId || currentBackgroundId === 'COFFEE';
  };

  const isDining = () => {
    return !currentTableId || currentBackgroundId === 'DINING';
  };

  return (
    <React.Fragment>
      <div className="furniture-dropdowns">
        <select
          className="custom-select"
          onChange={(e) => setCurrentChairId(e.target.value)}
        >
          {!currentChairId && <option selected>Select a Chair</option>}
          {renderSelectableObjects(MODAL_MODE.CHAIR)}
        </select>
        <select
          className="custom-select"
          onChange={(e) => setCurrentTableId(e.target.value, 'COFFEE')}
        >
          {isDining() && <option selected>Select a Coffee Table</option>}
          {renderSelectableObjects(MODAL_MODE.COFFEE_TABLE)}
        </select>
        <select
          className="custom-select"
          onChange={(e) => setCurrentTableId(e.target.value, 'DINING')}
        >
          {isCoffee() && <option selected>Select a Dining Table</option>}
          {renderSelectableObjects(MODAL_MODE.DINING_TABLE)}
        </select>
      </div>
    </React.Fragment>
  );
};

export default DropDown;
