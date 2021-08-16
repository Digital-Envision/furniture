import React from 'react';
import map from 'lodash/map';
import _ from 'lodash';
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

  const coffeeBackground = currentBackgroundId === 'COFFEE';

  const collectionsToChecks = coffeeBackground ? COFFEE_TABLE : DINING_TABLE;

  const selectedTable = _.find(
    collectionsToChecks,
    (data, key) => key === currentTableId
  );

  const removeTableSelections = selectedTable && (
    <option value={''}>None</option>
  );

  const removeChairSelections = currentChairId && (
    <option value={''}>None</option>
  );

  const emptySelections = (mode) => {
    switch (mode) {
      case 'COFFEE':
        return (
          coffeeBackground &&
          !selectedTable &&
          !currentTableId && <option selected>Select a Coffee Table</option>
        );
      case 'DINING':
        return (
          !coffeeBackground &&
          !selectedTable &&
          !currentTableId && <option selected>Select a Dining Table</option>
        );
      default:
        return null;
    }
  };

  const selectTableOptions = (mode) => {
    switch (mode) {
      case 'COFFEE':
        return (
          !coffeeBackground && <option selected>Select a Coffee Table</option>
        );
      case 'DINING':
        return (
          coffeeBackground && <option selected>Select a Dining Table</option>
        );
      default:
        return null;
    }
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
          {removeChairSelections}
        </select>
        <select
          className="custom-select"
          onChange={(e) => setCurrentTableId(e.target.value, 'COFFEE')}
        >
          {emptySelections('COFFEE')}
          {selectTableOptions('COFFEE')}
          {renderSelectableObjects(MODAL_MODE.COFFEE_TABLE)}
          {removeTableSelections}
        </select>
        <select
          className="custom-select"
          onChange={(e) => setCurrentTableId(e.target.value, 'DINING')}
        >
          {emptySelections('DINING')}
          {selectTableOptions('DINING')}
          {renderSelectableObjects(MODAL_MODE.DINING_TABLE)}
          {removeTableSelections}
        </select>
      </div>
    </React.Fragment>
  );
};

export default DropDown;
