import React, { useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
      
  }
  return (
    <div>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}
