import React from "react";

export default function CustomerList({ customers }) {
  function renderCustomers() {
    return customers.map((customer) => {
      return <li>{customer.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderCustomers()}</ul>
    </div>
  );
}
