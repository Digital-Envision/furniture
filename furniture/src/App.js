import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [backgrounds, setBackgrounds] = useState('');

  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="tables">
          <div className="chairs left-side"></div>
          <div className="chairs center left"></div>
          <div className="chairs center right"></div>
          <div className="chairs right-side"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
