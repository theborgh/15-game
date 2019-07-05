import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import PlayArea from './containers/PlayArea/PlayArea'
import Footer from './containers/Footer/Footer';
import './App.css';

class App extends Component {

  state = {
    solved: false,
    moveCounter: 0,
    boardState:
      [1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 0,
        13, 14, 15, 12],
    squareClicked: new Array(16).fill(false),
    resetTimer: false
  };

  newGame = (numOfShuffles) => {

    this.shuffleBoard(numOfShuffles);

    this.setState({
      resetTimer: true,
      moveCounter: 0
    })

    // remove modal
  }

  findIndexesOfNeighbors = (indexOfZero) => {
    let indexesOfNeighbors = [];

    // find neighbors & push them to an array
    if ((indexOfZero + 1) % 4 === 0) {
      indexesOfNeighbors.push(indexOfZero - 1);
    } else if ((indexOfZero % 4) === 0) {
      indexesOfNeighbors.push(indexOfZero + 1);
    } else {
      indexesOfNeighbors.push(indexOfZero - 1);
      indexesOfNeighbors.push(indexOfZero + 1);
    }

    if (indexOfZero > 3) {
      indexesOfNeighbors.push(indexOfZero - 4)
    }

    if (indexOfZero < 12) {
      indexesOfNeighbors.push(indexOfZero + 4);
    }

    return indexesOfNeighbors;
  }

  // Shuffle the board while preserving puzzle solvability
  shuffleBoard = (numOfShuffles) => {
    let shuffledBoard = [1, 2, 3, 4,
      5, 6, 7, 8,
      9, 10, 11, 12,
      13, 14, 15, 0];
    let indexOfZero = shuffledBoard.indexOf(0);
    let indexesOfNeighbors = [];
    let randNeighborIndex;

    for (let i = 0; i < numOfShuffles; i++) {
      indexesOfNeighbors = this.findIndexesOfNeighbors(indexOfZero);

      // pick a random neighbor & swap with the zero
      randNeighborIndex = indexesOfNeighbors[Math.floor(Math.random() * indexesOfNeighbors.length)];
      shuffledBoard[indexOfZero] = shuffledBoard[randNeighborIndex];
      shuffledBoard[randNeighborIndex] = 0;

      indexOfZero = randNeighborIndex;
      indexesOfNeighbors = [];
    }

    this.setState({
      boardState: shuffledBoard,
      solved: false
    })
  }

  // Is the board in its solved state?
  boardIsSolved = (boardState) => {

    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] !== i + 1 && i !== 15) return false;
    }

    return true;
  }

  giveAIHint = () => {
    let moves = [];
    let legalMoves = [];
    let board = [...this.state.boardState];
    let indexOfZero = board.indexOf(0);
    let tmp;

    // find all possible moves (minus previous move: no point in going back)
    legalMoves = this.findIndexesOfNeighbors(indexOfZero);

    console.log(legalMoves)

    // filter out the previous move
    if (moves.length !== 0) {
      console.log("moves is not empty")
    }

    // BFS: make each legal move & check if it solves the puzzle
    for (let i = 0; i < legalMoves.length; i++) {
      moves.push(legalMoves[i]);
      tmp = board[legalMoves[i]];
      board[indexOfZero] = board[legalMoves[i]];
      board[legalMoves[i]] = 0;
      if (this.boardIsSolved(board)) {
        alert("Found a solution! " + moves[i]);
        // make the FIRST move in the moves array

      } else {
        // revert the move
        board[indexOfZero] = 0;
        board[legalMoves[i]] = tmp;
      }
    }
    console.log("moves: ", moves)

  }

  handleSquareClick = (clickable, id) => {
    let currBoardState = [...this.state.boardState];
    let currSquareClicked = [...this.state.squareClicked];
    let newMoveCounter = this.state.moveCounter;

    if (clickable) {
      this.setState({
        resetTimer: false
      })
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
        moveCounter: newMoveCounter + 1
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
          moveCounter={this.state.moveCounter}
          newGame={this.newGame}
          resetTimer={this.state.resetTimer}
          AIHint={this.giveAIHint} />

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
