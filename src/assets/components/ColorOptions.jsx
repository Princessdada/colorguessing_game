import React from "react";

function ColorOptions({ options, handleGuess }) {
  return (
    <div className="options">
      {options.map((color, index) => (
        <button
          key={index}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => handleGuess(color)}
          data-testid="colorOption"
        ></button>
      ))}
    </div>
  );
}

export default ColorOptions;
