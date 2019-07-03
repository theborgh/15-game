import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import PlayArea from './containers/PlayArea/PlayArea'
import Footer from './containers/Footer/Footer';
import './App.css';

class App extends Component {

  state = {
    solved: false,
    moveCounter: 0,
    boardState: [1, 3, 2, 6,
                 5, 4, 8, 7,
                 11, 10, 0, 9,
                 13, 15, 14, 12]
  };

  // Is the board in its solved state?
  boardIsSolved = () => {
     for (let i in this.state.boardState) {
       console.log(i, this.state.boardState);
        if (this.state.boardState[i] !== i+1) return false;
     }

     return true;
  }

  handleSquareClick = () => {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <PlayArea boardState={this.state.boardState} handleClick={this.handleSquareClick} clicked={this.clicked} />

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
