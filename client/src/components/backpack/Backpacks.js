import axios from "axios";
import React, { useEffect, useState } from "react";
import BackpackForm from "./BackpackForm";
import BackpackList from "./BackpackList";

function Backpacks() {
  const [backpacks, setBackpacks] = useState([]);

  async function getBackpacks() {
    const backpacksRes = await axios.get("http://localhost:5000/backpacks/");
    setBackpacks(customersRes.data);
  }

  useEffect(() => {
    getBackpacks();
  }, []);

  return (
    <div>
      <BackpackForm getBackpacks={getBackpacks} />
      <BackpackList backpacks={backpacks} />
    </div>
  );
}

export default Backpacks;
