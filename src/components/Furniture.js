import React from 'react';
import '../CSS/Furniture.css';
import { BACKGROUND, CHAIR, COFFEE_TABLE, DINING_TABLE } from '../constants';

const Furniture = ({ currentChairId, currentTableId, currentBackgroundId }) => {
  return (
    <React.Fragment>
      <div className="Backgrounds">
        <img
          src={BACKGROUND[currentBackgroundId]}
          alt=""
          width="650px"
          height="400px"
        />
      </div>
      <div className="holder">
        {currentChairId && (
          <React.Fragment>
            <div className="chairs left-side">
              <img
                src={CHAIR[currentChairId].IMAGES.LEFT}
                alt=""
                width="100px"
                height="100px"
              />
            </div>
            <div className="chairs center left">
              <img
                src={CHAIR[currentChairId].IMAGES.CENTER}
                alt=""
                width="100px"
                height="100px"
              />
            </div>
            <div className="chairs center right">
              <img
                src={CHAIR[currentChairId].IMAGES.CENTER}
                alt=""
                width="100px"
                height="100px"
              />
            </div>
            <div className="chairs right-side">
              <img
                src={CHAIR[currentChairId].IMAGES.RIGHT}
                alt=""
                width="100px"
                height="100px"
              />
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
