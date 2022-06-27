import axios from "axios";
import React, { useEffect, useState } from "react";
import BackpackForm from "./BackpackForm";
import BackpackList from "./BackpackList";

function Customers() {
  const [customers, setCustomers] = useState([]);

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