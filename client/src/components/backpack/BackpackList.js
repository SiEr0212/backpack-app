import React from "react";

function BackpackList({ backpacks }) {
  function renderBackpacks() {
    return backpacks.map((backpack, i) => {
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