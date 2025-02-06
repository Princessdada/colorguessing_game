import React from "react";

function ColorBox({ targetColor }) {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: targetColor }}
      data-testid="colorBox"
    ></div>
  );
}

export default ColorBox;
