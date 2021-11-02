import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Backpack App</h1>
        <h2>Organize your Backpack for your next Hike</h2>
        <button>add item to backpack</button>
        <br />
        <br />
        <button>remove item from backpack</button>
        <br />
      </header>
    </div>
  );
}

export default App;
