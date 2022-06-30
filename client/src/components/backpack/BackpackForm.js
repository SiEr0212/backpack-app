import React, { useState } from "react";
import axios from "axios";

export default function BackpackForm({ getBackpacks }) {
  const [backpackName, setBackpackName] = useState("");

  async function saveBackpack(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: backpackName,
      };
      await axios.post("http://localhost:5000/customer/", customerData);
      getBackpacks();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveBackpack}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setBackpackName(e.target.value);
          }}
          value={backpackName}
        />
        <button type="submit">Save new backpack</button>
      </form>
    </div>
  );
}