import "./App.css";
import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
//

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

//Get the Data from Server part

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);

  let finalWeightTotal = 0;
  const weightTotal = list.map((c) => (finalWeightTotal += +c.weight));
  console.log(list);

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

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

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
          <TextField
            id="outlined-basic"
            label="Item name"
            variant="outlined"
            color="secondary"
            placeholder="Please enter Item name"
            sx={{ bgcolor: "white" }}
            type="text"
            value={name}
            onChange={handleChange}
            style={{ margin: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Item Weight in gramms"
            variant="outlined"
            color="secondary"
            placeholder="Eenter Item weight in g"
            sx={{ bgcolor: "white" }}
            value={weight}
            onChange={handleWeightChange}
            style={{ margin: "20px" }}
          />
          <Button
            variant="contained"
            type="button"
            onClick={handleAdd}
            style={{ margin: "30px" }}
          >
            Add to the Backpack!
          </Button>
        </div>
        <br />
        <br />
        <Card variant="outlined">
          <ul style={{ listStyleType: "none" }}>
            {list.map((item) => (
              <li key={item.id}>
                {item.name} {item.weight} g
                <br />
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </Card>

        <h2>Total weight: {finalWeightTotal / 1000} kg</h2>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </header>
    </div>
  );
}

export default App;
