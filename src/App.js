import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "Sleepingbag",
    weight: 1000,
  },
  {
    id: "b",
    name: "Tent",
    weight: 2000,
  },
];

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);

  let finalWeightTotal = 0;
  const weightTotal = list.map((c) => (finalWeightTotal += +c.weight));
  console.log(list)

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleWeightChange(e) {
    setWeight(e.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ weight, name, id: uuidv4() });

    setList(newList);

    setName("");
  }

  function handleRemove() {
    // remove item
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
          <input type="number" value={weight} onChange={handleWeightChange} />
          <button type="button" onClick={handleAdd}>
            Add to the Backpack!
          </button>
        </div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name} {item.weight} g 
              <br />
              <button type="button" onClick={() => handleRemove(item.id)}>
              Remove
             </button>

            </li>
          ))}
        </ul>
        
        <h2>Total weight: {finalWeightTotal / 1000} kg</h2>
      </header>
    </div>
  );
}

export default App;
