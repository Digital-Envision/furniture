import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import SelectionsMenu from './Component/SelectionsMenu';
import {
  GetAllBackgrounds,
  GetAllChairs,
  GetAllCoffee,
  GetAllDining,
} from './Utility/FileRetriever';

const App = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [allChair, setAllChair] = useState([]);
  const [allCoffee, setAllCoffee] = useState([]);
  const [allDining, setAllDining] = useState([]);

  const [currentChair, setCurrentChair] = useState('');
  const [currentTable, setCurrentTable] = useState('');
  const [currentBackground, setCurrentBackground] = useState('');

  const GetAllData = useRef(() => {});

  const GetData = async () => {
    GetAllBackgrounds(setBackgrounds, setCurrentBackground);

    const chairs = await GetAllChairs(setAllChair);

    GetAllCoffee(setAllCoffee);

    const dinings = await GetAllDining(setAllDining);

    SetChair(chairs);

    SetTable(dinings, 'DiningTables');
  };

  const SetChair = async (models) => {
    const newChairAPI = await fetch(`/api/Chairs/${models}`);
    const newChairPayload = await newChairAPI.json();
    const newChairData = newChairPayload.data;

    setCurrentChair(newChairData);
  };

  const SetTable = async (models, mode) => {
    const newTableAPI = await fetch(`/api/${mode}/${models}`);
    const newTablePayload = await newTableAPI.json();
    const newTableData = newTablePayload.data;

    setCurrentTable(newTableData['Base']);
  };

  GetAllData.current = GetData;

  useEffect(() => {
    GetAllData.current();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <SelectionsMenu
          allChair={allChair}
          allCoffee={allCoffee}
          allDining={allDining}
          setCurrentChair={setCurrentChair}
          setCurrentTable={setCurrentTable}
          SetChair={SetChair}
          SetTable={SetTable}
        />
        <div className="Backgrounds">
          <img src={currentBackground} alt="" width="650px" height="400px" />
        </div>
        <div className="holder">
          <div className="chairs left-side">
            <img
              src={currentChair['Left']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="chairs center left">
            <img
              src={currentChair['Center']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="chairs center right">
            <img
              src={currentChair['Center']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="chairs right-side">
            <img
              src={currentChair['Right']}
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="tables">
            <img src={currentTable} alt="" height="100%" width="100%" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
