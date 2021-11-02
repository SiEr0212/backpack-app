import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';


const initialList = [
  {
    id: 'a',
    name: 'Sleepingbag',
  },
  {
    id: 'b',
    name: 'Tent',
  },
];

function App() {
  const [list, setList] = useState(initialList);

  function handleChange() {
    // track input field's state
  }
 
  function handleAdd() {
    // add item
  }

  return (
    <div className="App">

  
      <header className="App-header">
        <h1>Backpack App</h1>
        <br />
        <br />
        <h2>Organize your Backpack for your next Hike</h2>
        <br />
        <br />
        <div>
          <input type="text" onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
        <ul>
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
       




      <button>Add to the Backpack!</button>

      <h2>Total weight: 0kg</h2>
      </header>
    </div>
  );
}

export default App;
