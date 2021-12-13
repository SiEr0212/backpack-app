import React, { useState } from "react";
import axios from "axios";

export default function CustomerForm() {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      await axios.post("http://localhost:5000/customer/", customerData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setCustomerName(e.value.target);
          }}
          value={customerName}
        />
        <button type="submit">Save new user</button>
      </form>
    </div>
  );
}
