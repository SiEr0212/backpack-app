import React, { useState } from "react";

export default function CustomerForm() {
  const [customerName, setCustomerName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setCustomerName(e.value.target)}
        />
        <button type="submit">Save new user</button>
      </form>
    </div>
  );
  console.log(customerName);
}
