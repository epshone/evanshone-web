import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header.js';
import Game from './ticTacToe/ticTacToe.js';
import './ticTacToe/ticTacToe.css';

function App() {
  return (
    <div>
      <Header></Header>
      <p></p>
      <Game></Game>
    </div>
  );
}

export default App;
