import React from 'react';
import '../CSS/Furniture.css';
import { BACKGROUND, CHAIR, COFFEE_TABLE, DINING_TABLE } from '../constants';

const HolderOffset = (backgroundId) => {
  if (backgroundId === 'DINING') return 'holder-offset holder-kitchen';

  return '';
};

const Furniture = ({ currentChairId, currentTableId, currentBackgroundId }) => {
  return (
    <React.Fragment>
      <div className="backgrounds">
        <img src={BACKGROUND[currentBackgroundId]} alt="" />
      </div>
      <div className={`holder ${HolderOffset(currentBackgroundId)}`}>
        {currentChairId && (
          <React.Fragment>
            <div className="chairs left-side">
              <img src={CHAIR[currentChairId].IMAGES.LEFTSIDE} alt="" />
            </div>
            <div className="chairs center left">
              <img src={CHAIR[currentChairId].IMAGES.LEFT} alt="" />
            </div>
            <div className="chairs center right">
              <img src={CHAIR[currentChairId].IMAGES.RIGHT} alt="" />
            </div>
            <div className="chairs right-side">
              <img src={CHAIR[currentChairId].IMAGES.RIGHTSIDE} alt="" />
            </div>
          </React.Fragment>
        )}

        {currentTableId && (
          <div className="tables">
            <img
              src={
                currentBackgroundId === 'COFFEE'
                  ? COFFEE_TABLE[currentTableId].IMAGES.BASE
                  : DINING_TABLE[currentTableId].IMAGES.BASE
              }
              alt=""
              height="100%"
              width="100%"
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Furniture;
