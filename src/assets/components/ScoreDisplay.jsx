import React from "react";

function ScoreDisplay({ score }) {
  return (
    <p className="score" data-testid="score">
      Score: {score}
    </p>
  );
}

export default ScoreDisplay;
