import React from "react";

function BackpackList({ backpacks }) {
  function renderBackpacks() {
    return backpacks.map((backpack, i) => {
      return <li key={i}>{backpack.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderBackpacks()}</ul>
    </div>
  );
}

export default BackpackList;