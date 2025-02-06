import React from "react";

function NewGameButton({ handleNewGame }) {
  return (
    <button
      className="new-game-button"
      onClick={handleNewGame}
      data-testid="newGameButton"
    >
      New Game
    </button>
  );
}

export default NewGameButton;
