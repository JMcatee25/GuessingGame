import React from "react";

function Easylvl(props) {
  return (
    <div>
      <h1>Standard Game</h1>
      <p>Guess a number between 1 and 10</p>
      <label htmlFor="usrinput">
        Your Guess:
        <input
          id="standardguess"
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

export default Easylvl;
