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
      13, 15, 14, 12],
    squareClicked: new Array(16).fill(false)
  };

  // Is the board in its solved state?
  boardIsSolved = () => {
    for (let i in this.state.boardState) {
      console.log(i, this.state.boardState);
      if (this.state.boardState[i] !== i + 1) return false;
    }

    return true;
  }

  handleSquareClick = (clickable, id) => {

    if (clickable) {
      let currSquareClicked = [...this.state.squareClicked];
      currSquareClicked[id] = true;
      this.setState({ squareClicked: currSquareClicked })
      // set square clicked back to false
      
      currSquareClicked[id] = false;
      this.setState({ squareClicked: currSquareClicked })
  
      // Swap the zero square with the clicked square
      let indexOfZero = this.state.boardState.indexOf(0);
      let indexOfClickedSquare = this.state.boardState.indexOf(id);
      let currBoardState = [...this.state.boardState];
      currBoardState[indexOfZero] = id;
      currBoardState[indexOfClickedSquare] = 0;
  
      this.setState({
        boardState: currBoardState
      })
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
          handleTransitionEnd={this.handleTransitionEnd} />

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
