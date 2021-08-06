import React from 'react';
import SelectionsMenu from './components/SelectionsMenu';
import Furniture from './components/Furniture';
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
        <SelectionsMenu
          setCurrentChairId={setCurrentChairId}
          setCurrentTableId={setTableId}
        />
        <Furniture
          currentChairId={currentChairId}
          currentTableId={currentTableId}
          currentBackgroundId={currentBackgroundId}
        />
      </header>
    </div>
  );
};

export default App;
