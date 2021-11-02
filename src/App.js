import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
mport { v4 as uuidv4 } from 'uuid';


const initialList = [
  {
    id: "a",
    name: "Sleepingbag",
  },
  {
    id: "b",
    name: "Tent",
  },
];

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });

    setList(newList);
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
          <input type="text" value={name} onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Add to the Backpack!
          </button>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <h2>Total weight: 0kg</h2>
      </header>
    </div>
  );
}

export default App;
