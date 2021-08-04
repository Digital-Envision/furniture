import './App.css';
import React, { useEffect, useState } from 'react';
import SelectionsMenu from './Component/SelectionsMenu';

function App() {
  const [backgrounds, setBackgrounds] = useState({});
  const [allChair, setAllChair] = useState([]);
  const [allCoffee, setAllCoffee] = useState([]);
  const [allDining, setAllDining] = useState([]);

  const [currentChair, setCurrentChair] = useState({});

  const GetData = async () => {
    const backgroundsAPI = await fetch('/api/Backgrounds');
    const backgroundsPayload = await backgroundsAPI.json();

    setBackgrounds(backgroundsPayload.data);

    console.log(backgroundsPayload.data);

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
  };

  const SetChair = async (models) => {
    const newChairAPI = await fetch(`/api/Chairs/${models}`);
    const newChairPayload = await newChairAPI.json();
    const newChairData = newChairPayload.data;

    setCurrentChair(CurrentChairObjects(newChairData));
  };

  const CurrentChairObjects = (newChairData) => {
    return {
      Base: newChairData[0],
      Center: newChairData[1],
      Left: newChairData[2],
      Right: newChairData[3],
    };
  };

  const SelectChair = () => {};

  const SelectDining = () => {};

  const SetDining = () => {};

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
        <div className="tables">
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
        </div>
      </header>
    </div>
  );
}

export default App;
