import axios from "axios";
import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customerRes = await axios.get("hhtp://localhost:5000/customer/");
    setCustomers(customerRes.data);
  }

  useEffect(() =>{
      getCustomers()
  }, [])
  
  return (
    <div>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}
