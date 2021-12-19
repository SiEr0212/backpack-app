import React from "react";

export default function CustomerList({customers}) {
  return (
    <div>
      <ul>
        {{renderCustomers()}}
      </ul>
    </div>
  );
}
