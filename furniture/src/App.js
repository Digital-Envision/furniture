import React from 'react';
import SelectionsMenu from './components/SelectionsMenu';
import { BACKGROUND, CHAIR, COFFEE_TABLE, DINING_TABLE } from "./constants";
import './App.css';

const App = () => {
  const [currentChairId, setCurrentChairId] = React.useState(null);
  const [currentTableId, setCurrentTableId] = React.useState(null);
  const [currentBackgroundId, setCurrentBackgroundId] = React.useState('COFFEE');

  /**
   * @param {string} id                     one of COFFEE_TABLE or DINING_TABLE keys
   * @param {string} backgroundType         one of BACKGROUND keys
   */
  const setTableId = (id, backgroundType) => {
    setCurrentTableId(id);
    setCurrentBackgroundId(backgroundType);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SelectionsMenu
          setCurrentChairId={setCurrentChairId}
          setCurrentTableId={setTableId}
        />
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
                src={currentBackgroundId === 'COFFEE' ? COFFEE_TABLE[currentTableId].IMAGES.BASE : DINING_TABLE[currentTableId].IMAGES.BASE}
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
