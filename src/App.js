import React from 'react';
import Board from './containers/Board/Board';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      {/* <PlayArea /> */}

      <Board />

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
