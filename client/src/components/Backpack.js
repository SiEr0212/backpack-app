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
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

const initialList = [
  {
    id: "a",
    name: "Sleepingbag",
    weight: 1000,
  },
  {
    id: "b",
    name: "Tent",
    weight: 1300,
  },
  {
    id: "c",
    name: "Backpack",
    weight: 1500,
  },
];

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
    //turns input string into a number
  }

  function handleAdd() {
    const newList = list.concat({ weight, name, id: uuidv4() });

    console.log(newList);

    setList(newList);

   

    /* to do:  
        in a first step: create a component where I store different backpacks, list of backpacks

        second step: create a global backpack state with redux or context for example and use it in schema? 
        So I can store different backpacks and have acces to it with CRUD functionality
        need to habe global acces to newList Hook */

    setName("");

    console.log(initialList);
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    console.log(newList);
  }

  function handleSortListHeaviestFirst() {
    const newList = [...list].sort((a, b) => b.weight - a.weight);
    setList(newList);
  }

  function handleSortListLightestFirst() {
    const newList = [...list].sort((a, b) => a.weight - b.weight);
    setList(newList);
  }

  function handleSaveBackpack() {
    //save the current backpack configuration in the backpacks list component
    alert("Backpack saved!");
    console.log(list);
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
          style={{ margin: "10px" }}
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
          style={{ margin: "10px" }}
        />
        <Button
          variant="contained"
          type="button"
          onClick={handleAdd}
          style={{ margin: "10px" }}
        >
          Add to Backpack
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
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => handleSaveBackpack()}
      >
        <SaveOutlinedIcon fontSize="small" />
        <h5>Save Backpack</h5>
      </IconButton>
    </div>
  );
}

export default Backpack;
