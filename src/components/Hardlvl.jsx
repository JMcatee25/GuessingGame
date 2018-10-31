import React from "react";

function Hardlvl(props) {
  return (
    <div>
      <h1>Expert Game</h1>
      <p>Guess a number between 1 and 100</p>
      <label for="usrinput">
        Your Guess:
        <input
          id="expertguess"
          type="text"
          name="usrinput"
          onChange={props.usrGuess}
        />
      </label>
      <button onClick={props.check}>Check</button>
      <button onClick={props.reset}>Reset</button>
      <p id="displayMessage" />
      <p id="displayHighscore" />
    </div>
  );
}

export default Hardlvl;
