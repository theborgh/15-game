import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import PlayArea from './containers/PlayArea/PlayArea'
import Footer from './containers/Footer/Footer';
import constants from './constants';
import './App.css';

class App extends Component {

  state = {
    solved: false,
    boardState: [1, 3, 2, 6,
                 5, 4, 8, 7,
                 11, 10, 0, 9,
                 13, 15, 14, 12]
  };

  // Is the current square clickable? If so, what direction should it go? 
  isSquareClickable = (sqId) => {

    // find the index of the current square
    let indexOfSq = this.state.boardState.indexOf(sqId);

    // check left side
    if (indexOfSq % 4 !== 0 && this.state.boardState[indexOfSq-1] === 0) {
        return constants.DIR_LEFT;
    }
    // check right side
    if (indexOfSq !== 3 && indexOfSq !== 7 && indexOfSq !== 11 && indexOfSq !== 15 &&
        this.state.boardState[indexOfSq+1] === 0) {
        return constants.DIR_RIGHT;
    }
    // check up
    if (indexOfSq >= 4 && this.state.boardState[indexOfSq-4] === 0) {
        return constants.DIR_UP;
    }
    // check down
    if (indexOfSq <= 11 && this.state.boardState[indexOfSq+4] === 0) {
        return constants.DIR_DOWN;
    }

    return false;
  }

  // Is the board in its solved state?
  boardIsSolved = () => {
     for (let i in this.state.boardState) {
       console.log(i, this.state.boardState);
        if (this.state.boardState[i] !== i+1) return false;
     }

     return true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <PlayArea boardState={this.state.boardState} />

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
