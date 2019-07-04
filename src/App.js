import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import PlayArea from './containers/PlayArea/PlayArea'
import Footer from './containers/Footer/Footer';
import './App.css';

class App extends Component {

  state = {
    solved: false,
    moveCounter: 0,
    boardState: [1, 2, 3, 4,
      5, 6, 7, 8,
      9, 10, 11, 0,
      13, 14, 15, 12],
    squareClicked: new Array(16).fill(false)
  };

  // TODO: shuffle in such a way to preserve solvability
  shuffleBoard = () => {
    let shuffledBoard = [...this.state.boardState];

    for (let i = 0; i < 100; i++) {
      let indexA = Math.floor(Math.random()*16);
      let indexB = Math.floor(Math.random()*16);
      let tmp = shuffledBoard[indexA];
      shuffledBoard[indexA] = shuffledBoard[indexB];
      shuffledBoard[indexB] = tmp;
    }

    this.setState({
      boardState: shuffledBoard
    })
  }

  // Is the board in its solved state?
  boardIsSolved = (boardState) => {

    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] !== i+1 && i !== 15) return false;
    }

    return true;
  }

  handleSquareClick = (clickable, id) => {
    let currBoardState = [...this.state.boardState];
    let currSquareClicked = [...this.state.squareClicked];
    let newMoveCounter = this.state.moveCounter;

    if (clickable) {
      currSquareClicked[id] = true;
      this.setState({ squareClicked: currSquareClicked })
      // set square clicked back to false
      
      currSquareClicked[id] = false;
      this.setState({ squareClicked: currSquareClicked })
  
      // Swap the zero square with the clicked square
      let indexOfZero = this.state.boardState.indexOf(0);
      let indexOfClickedSquare = this.state.boardState.indexOf(id);
      currBoardState[indexOfZero] = id;
      currBoardState[indexOfClickedSquare] = 0;

      this.setState({
        boardState: currBoardState,
        moveCounter: newMoveCounter+1
      })
  
      if (this.boardIsSolved(currBoardState)) {
        this.setState({
          solved: true
        })
        alert("Congratulations, you won!")
      }
    }

  }

  handleTransitionEnd = (squareId) => {
    // set square clicked back to false
    let currSquareClicked = [...this.state.squareClicked];
    currSquareClicked[squareId] = false;
    this.setState({ squareClicked: currSquareClicked })

    // Swap the zero square with the clicked square
    let indexOfZero = this.state.boardState.indexOf(0);
    let indexOfClickedSquare = this.state.boardState.indexOf(squareId);
    let currBoardState = [...this.state.boardState];
    currBoardState[indexOfZero] = squareId;
    currBoardState[indexOfClickedSquare] = 0;

    this.setState({
      boardState: currBoardState
    })

    console.log(indexOfZero, indexOfClickedSquare, currBoardState, this.state.boardState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <PlayArea boardState={this.state.boardState}
          clicked={this.state.squareClicked}
          handleClick={this.handleSquareClick}
          handleTransitionEnd={this.handleTransitionEnd}
          moveCounter={this.state.moveCounter} />

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
