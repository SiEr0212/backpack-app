import React from "react";

function BackpackList({ backpacks }) {
  function renderBackpackss() {
    return backpacks.map((customer, i) => {
      return <li key={i}>{backpacks.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderBackpacks()}</ul>
    </div>
  );
}

export default BackpackList;