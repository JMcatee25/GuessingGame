import React, { Component } from "react";
import Standard from "./components/Easylvl";
import "./assets/Main.scss";
import Expert from "./components/Hardlvl";

class App extends Component {
  constructor() {
    super();
    this.state = {
      standardHighscore: 100,
      standardTargetValue: 0,
      expertHighscore: 101,
      expertTargetValue: 0,
      selectedDifficulty: "",
      userGuess: "",
      userTries: 0,
      statehintMessage: "",
      statehighscoreMessage: "",
      stateLosing: true
    };

    this.handleRandomEasy = this.handleRandomEasy.bind(this);
    this.handleRandomHard = this.handleRandomHard.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleRandomEasy() {
    var targetEasy = Math.floor(Math.random() * 10) + 1;
    this.setState({
      selectedDifficulty: "standard",
      standardTargetValue: targetEasy
    });
  }

  handleRandomHard() {
    var targetHard = Math.floor(Math.random() * 100) + 1;
    this.setState({
      selectedDifficulty: "expert",
      expertTargetValue: targetHard
    });
  }

  handleReset() {
    this.setState({
      selectedDifficulty: "",
      userGuess: "",
      userTries: "",
      statehintMessage: "",
      stateLosing: true
    });
  }

  handleUsrGuess() {
    if (this.state.selectedDifficulty === "standard") {
      var test2 = document.getElementById("standardguess").value;
      this.setState({ userGuess: test2 });
    } else if (this.state.selectedDifficulty === "expert") {
      var test3 = document.getElementById("expertguess").value;
      this.setState({ userGuess: test3 });
    }
  }

  handleCheck() {
    let guess = this.state.userGuess;
    let tries = this.state.userTries;
    let hintMessage = this.state.statehintMessage;
    let target = this.state.standardTargetValue;
    let losing = this.state.stateLosing;
    let highscore = this.state.standardHighscore;
    let highscoreMessage = this.state.statehighscoreMessage;
    if (this.state.selectedDifficulty === "expert") {
      target = this.state.expertTargetValue;
      highscore = this.state.expertHighscore;
    }
    while (losing) {
      tries++;
      // eslint-disable-next-line
      if (parseInt(guess) === target) {
        losing = false;
        hintMessage = "You won in " + tries + " tries";
      } else {
        if (guess > target) {
          hintMessage = "Guess lower, this is your " + tries + "st try";
        } else {
          hintMessage = "Guess Higher!, this is your " + tries + "st try";
        }
      }

      if (losing === false) {
        if (this.state.selectedDifficulty === "expert") {
          if (highscore > tries) {
            highscore = tries;
            highscoreMessage = `Your highscore is ${highscore} attempts`;
            this.setState({
              expertHighscore: highscore,
              statehighscoreMessage: highscoreMessage
            });
          } else if (highscore < tries) {
            highscoreMessage = `Your highscore is ${highscore} attempts`;
            this.setState({
              expertHighscore: highscore,
              statehighscoreMessage: highscoreMessage
            });
          }
        } else if (this.state.selectedDifficulty === "standard") {
          if (highscore > tries) {
            highscore = tries;
            highscoreMessage = `Your highscore is ${highscore} attempts`;
            this.setState({
              standardHighscore: highscore,
              statehighscoreMessage: highscoreMessage
            });
          } else if (highscore < tries) {
            highscoreMessage = `Your highscore is ${highscore} attempts`;
            this.setState({
              standardHighscore: highscore,
              statehighscoreMessage: highscoreMessage
            });
          }
        }
      }
      break;
    }
    this.setState({
      userGuess: guess,
      userTries: tries,
      statehintMessage: hintMessage,
      standardTargetValue: target,
      stateLosing: losing
    });

    document.getElementById("displayMessage").innerHTML = hintMessage;
    document.getElementById("displayHighscore").innerHTML = highscoreMessage;
  }

  handleDifficulty() {
    if (this.state.selectedDifficulty === "") {
      return (
        <div>
          <header>
            <h1>Number Guessing Game</h1>
          </header>
          <button onClick={this.handleRandomEasy}>Standard</button>
          <button onClick={this.handleRandomHard}>Expert</button>
        </div>
      );
    } else {
      if (this.state.selectedDifficulty === "standard") {
        return (
          <Standard
            state={this.state}
            reset={this.handleReset}
            usrGuess={event => this.handleUsrGuess(event)}
            check={this.handleCheck}
          />
        );
      } else if (this.state.selectedDifficulty === "expert") {
        return (
          <Expert
            state={this.state}
            reset={this.handleReset}
            usrGuess={event => this.handleUsrGuess(event)}
            check={this.handleCheck}
          />
        );
      }
    }
  }
  render() {
    return <div className="App">{this.handleDifficulty()}</div>;
  }
}

export default App;
