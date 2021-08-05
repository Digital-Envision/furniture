import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import SelectionsMenu from './Component/SelectionsMenu';
import {
  GetAllBackgrounds,
  GetAllChairs,
  GetAllCoffee,
  GetAllDining,
} from './Utility/FileRetriever';
import { ModalProvider } from './Component/ModalContext';

const App = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [allChair, setAllChair] = useState([]);
  const [allCoffee, setAllCoffee] = useState([]);
  const [allDining, setAllDining] = useState([]);

  const [currentChair, setCurrentChair] = useState('');
  const [currentTable, setCurrentTable] = useState('');
  const [currentBackground, setCurrentBackground] = useState('');

  const GetAllData = useRef(() => {});

  const publicImages = process.env.PUBLIC_URL + '/Images/';

  const GetData = async () => {
    const backdrops = await GetAllBackgrounds(
      setBackgrounds,
      setCurrentBackground
    );

    const chairs = await GetAllChairs(setAllChair);

    GetAllCoffee(setAllCoffee);

    const dinings = await GetAllDining(setAllDining);

    SetChair(chairs);

    SetTable(dinings, 'Dining');

    setCurrentBackground(backdrops);
  };

  const SetChair = async (models) => {
    if (models !== undefined) setCurrentChair(models);
  };

  const SetTable = async (models, mode) => {
    setCurrentTable(models);

    switch (mode) {
      case 'Coffee':
        setCurrentBackground(backgrounds[0]);
        break;
      case 'Dining':
        setCurrentBackground(backgrounds[1]);
        break;
      default:
        break;
    }
  };

  GetAllData.current = GetData;

  useEffect(() => {
    GetAllData.current();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ModalProvider>
          <SelectionsMenu
            allChair={allChair}
            allCoffee={allCoffee}
            allDining={allDining}
            setCurrentChair={setCurrentChair}
            setCurrentTable={setCurrentTable}
            SetChair={SetChair}
            SetTable={SetTable}
          />
        </ModalProvider>
        <div className="Backgrounds">
          <img
            src={publicImages + currentBackground}
            alt=""
            width="650px"
            height="400px"
          />
        </div>
        <div className="holder">
          <div className="chairs left-side">
            <img
              src={publicImages + currentChair['Left']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="chairs center left">
            <img
              src={publicImages + currentChair['Center']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="chairs center right">
            <img
              src={publicImages + currentChair['Center']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="chairs right-side">
            <img
              src={publicImages + currentChair['Right']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="tables">
            <img
              src={publicImages + currentTable}
              alt=""
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
