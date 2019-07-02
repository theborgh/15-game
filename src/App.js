import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import PlayArea from './containers/PlayArea/PlayArea'
import Footer from './containers/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <PlayArea />

      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
