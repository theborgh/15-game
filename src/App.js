import React, { Component } from 'react';
import Navbar from './containers/Navbar/Navbar';
import PlayArea from './containers/PlayArea/PlayArea'
import Footer from './containers/Footer/Footer';
import './App.css';

class App extends Component {

  state = {
    solved: false,
    boardState: [1, 3, 2, 6,
                 5, 4, 8, 7,
                 11, 10, 0, 9,
                 13, 15, 14, 12]
  };

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
