import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [backgrounds, setBackgrounds] = useState({});
  const [allChair, setAllChair] = useState([]);
  const [allCoffee, setAllCoffee] = useState([]);
  const [allDining, setAllDining] = useState([]);

  const [currentChair, setCurrentChair] = useState([]);

  const GetData = async () => {
    const chairAPI = await fetch('/api/Chairs');
    const chairPayload = await chairAPI.json();

    setAllChair(chairPayload.data);

    const coffeeAPI = await fetch('/api/CoffeTables');
    const coffeePayload = await coffeeAPI.json();

    setAllCoffee(coffeePayload.data);

    const diningAPI = await fetch('/api/DiningTables');
    const diningPayload = await diningAPI.json();

    setAllDining(diningPayload.data);

    const newChairAPI = await fetch(`/api/Chairs/${chairPayload.data[0]}`);
    const newChairPayload = await newChairAPI.json();

    setCurrentChair(newChairPayload.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="tables">
          <div className="chairs left-side">
            <img src={currentChair[0]} alt="" />
          </div>
          <div className="chairs center left"></div>
          <div className="chairs center right"></div>
          <div className="chairs right-side"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
