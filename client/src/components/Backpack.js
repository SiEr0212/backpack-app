import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import "./Backpack.css";
import ScaleIcon from "@mui/icons-material/Scale";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SortIcon from "@mui/icons-material/Sort";

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

function Backpack() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);

  let finalWeightTotal = 0;
  const weightTotal = list.map((c) => (finalWeightTotal += +c.weight));
  console.log(weightTotal);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleWeightChange(e) {
    setWeight(Number(e.target.value));
    //turn input string into number
  }

  function handleAdd() {
    const newList = list.concat({ weight, name, id: uuidv4() });

    console.log(newList); //data I want to send to the db

    setList(newList);

    /* to do:  
        create a global backpack state with redux or context for example and use it in schema? 
        So I can store different backpacks and have acces to it with CRUD functionality
        need to habe global acces to newList Hook
  */

    setName("");

    console.log(initialList);
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    console.log(newList); //backpack items and their weight
  }

  function handleSortListHeaviestFirst() {
    //sorts backpack items from heaviest to ligthest
    //to do: on second click list goes to lightest to heaviest item
    const newList = [...list].sort((a, b) => b.weight - a.weight);
    setList(newList);
  }

  function handleSortListLightestFirst() {
    const newList = [...list].sort((a, b) => a.weight - b.weight);
    setList(newList);
  }

  return (
    <div class="flexContainer">
      <h1 id="backpackTitle">Backpack App</h1>
      <br />
      <br />
      <h2 id="backpackDescription">
        Organize your Backpack for your next Hike
      </h2>
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
          placeholder="Enter Item weight in g"
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
      <div
        style={{ display: "flex", justifyContent: "center", width: "100vw" }}
      >
        <Card variant="outlined">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleSortListHeaviestFirst()}
          >
            <SortIcon fontSize="small" />

            <h6>heaviest first</h6>
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleSortListLightestFirst()}
          >
            <SortIcon fontSize="small" />
            <h6>lightest first</h6>
          </IconButton>

          <ul style={{ listStyleType: "none" }}>
            {list.map((item) => (
              <li key={item.id}>
                {item.name} {item.weight} g
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => handleRemove(item.id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Card variant="outlined">
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          <ScaleIcon></ScaleIcon>
          Total weight: {finalWeightTotal / 1000} kg
        </h2>
      </Card>
    </div>
  );
}

export default Backpack;
