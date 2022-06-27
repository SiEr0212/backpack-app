import axios from "axios";
import React, { useEffect, useState } from "react";
import BackpackForm from "./BackpackForm";
import BackpackList from "./BackpackList";

function Backpacks() {
  const [backpacks, setBackpacks] = useState([]);

  async function getBackpacks() {
    const customersRes = await axios.get("http://localhost:5000/customer/");
    setBackpacks(customersRes.data);
  }

  useEffect(() => {
    getBackpacks();
  }, []);

  return (
    <div>
      <BackpackForm getCustomers={getBackpacks} />
      <BackpackList customers={backpacks} />
    </div>
  );
}

export default Backpacks;