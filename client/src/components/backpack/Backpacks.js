import axios from "axios";
import React, { useEffect, useState } from "react";
import BackpackForm from "./BackpackForm";
import BackpackList from "./BackpackList";

function Backpacks() {
  const [backpacks, setBackpacks] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get("http://localhost:5000/customer/");
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}