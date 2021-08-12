import React from 'react';
import Furniture from './components/Furniture';
import DropDown from './components/DropDown';
import './CSS/App.css';

const App = () => {
  const [currentChairId, setCurrentChairId] = React.useState(null);
  const [currentTableId, setCurrentTableId] = React.useState(null);
  const [currentBackgroundId, setCurrentBackgroundId] =
    React.useState('COFFEE');

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
        <DropDown
          currentChairId={currentChairId}
          currentTableId={currentTableId}
          setCurrentChairId={setCurrentChairId}
          setCurrentTableId={setTableId}
          currentBackgroundId={currentBackgroundId}
        />
        <Furniture
          currentChairId={currentChairId}
          currentTableId={currentTableId}
          setCurrentChairId={setCurrentChairId}
          setCurrentTableId={setTableId}
          currentBackgroundId={currentBackgroundId}
        />
      </header>
    </div>
  );
};

export default App;
