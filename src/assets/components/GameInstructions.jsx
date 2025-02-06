import React from "react";

function GameInstructions({ message, gameStatus }) {
  return (
    <>
      <p className="instructions" data-testid="gameInstructions">
        {message}
      </p>
      <p className="status" data-testid="gameStatus">
        {gameStatus}
      </p>
    </>
  );
}

export default GameInstructions;
