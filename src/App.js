import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 + number2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Backpack App</h1>
        <h2>Organize your Backpack for your next Hike</h2>
        
        <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <br />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={calculateTotal}>Add Them!</button>

      <h2>Total weight: {total}kg</h2>
      </header>
    </div>
  );
}

export default App;
