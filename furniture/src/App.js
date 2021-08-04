import './App.css';
import React, { useEffect, useState } from 'react';
import SelectionsMenu from './Component/SelectionsMenu';

function App() {
  const [backgrounds, setBackgrounds] = useState({});
  const [allChair, setAllChair] = useState([]);
  const [allCoffee, setAllCoffee] = useState([]);
  const [allDining, setAllDining] = useState([]);

  const [currentChair, setCurrentChair] = useState({});
  const [currentTable, setCurrentTable] = useState({});

  const GetData = async () => {
    const backgroundsAPI = await fetch('/api/Backgrounds');
    const backgroundsPayload = await backgroundsAPI.json();

    setBackgrounds(backgroundsPayload.data);

    const chairAPI = await fetch('/api/Chairs');
    const chairPayload = await chairAPI.json();

    setAllChair(chairPayload.data);

    const coffeeAPI = await fetch('/api/CoffeTables');
    const coffeePayload = await coffeeAPI.json();

    setAllCoffee(coffeePayload.data);

    const diningAPI = await fetch('/api/DiningTables');
    const diningPayload = await diningAPI.json();

    setAllDining(diningPayload.data);

    SetChair(chairPayload.data[0]);

    SetDining(diningPayload.data[0]);
  };

  const SetChair = async (models) => {
    const newChairAPI = await fetch(`/api/Chairs/${models}`);
    const newChairPayload = await newChairAPI.json();
    const newChairData = newChairPayload.data;

    setCurrentChair(newChairData);
  };

  const SelectChair = () => {};

  const SelectDining = () => {};

  const SetDining = async (models) => {
    const newTableAPI = await fetch(`/api/DiningTables/${models}`);
    const newTablePayload = await newTableAPI.json();
    const newTableData = newTablePayload.data;

    setCurrentTable(newTableData['Base']);
  };

  const SelectCoffee = () => {};

  const SetCoffee = () => {};

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <SelectionsMenu
          allChair={allChair}
          allCoffee={allCoffee}
          allDining={allDining}
        />
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
}

export default App;
