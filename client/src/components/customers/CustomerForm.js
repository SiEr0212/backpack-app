import React, { useState } from "react";

export default function CustomerForm() {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault()
    try {
      
    } catch (error) {
      console.error(err)
      
    }

  };

  return (
    <div>
      <form onSubmit={saveCustomer()}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {setCustomerName(e.value.target)}}
          value = {customerName}
        />
        <button type="submit">Save new user</button>
      </form>
    </div>
  );
  
}
