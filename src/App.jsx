import React, { useState, useEffect } from "react";
import "./App.css";
import ColorBox from "./assets/components/ColorBox";
import ColorOptions from "./assets/components/ColorOptions";
import GameInstructions from "./assets/components/GameInstructions";
import ScoreDisplay from "./assets/components/ScoreDisplay";
import NewGameButton from "./assets/components/NewGameButton";

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"];

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Guess the correct color!");
  const [gameStatus, setGameStatus] = useState("");

  const initializeGame = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setTargetColor(randomColor);
    const shuffledColors = [...COLORS].sort(() => Math.random() - 0.5);
    setOptions(shuffledColors);
    setGameStatus("");
    setMessage("Guess the correct color!");
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct! 🎉");
      setMessage("You guessed it right! Click 'New Game' to play again.");
    } else {
      setGameStatus("Wrong! 😢");
      setMessage("Try again!");
    }
  };

  const handleNewGame = () => {
    initializeGame();
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <div className="game-container">
        <ColorBox targetColor={targetColor} />
        <ColorOptions options={options} handleGuess={handleGuess} />
        <GameInstructions message={message} gameStatus={gameStatus} />
        <ScoreDisplay score={score} />
        <NewGameButton handleNewGame={handleNewGame} />
      </div>
    </div>
  );
}

export default App;
