import React, { useState } from "react";
import axios from "axios";

export default function BackpackForm({ getBackpacks }) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      await axios.post("http://localhost:5000/customer/", customerData);
      getCustomers();
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
            setCustomerName(e.target.value);
          }}
          value={customerName}
        />
        <button type="submit">Save new user</button>
      </form>
    </div>
  );
}
