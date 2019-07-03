import React from 'react';
import './App.css';
import Game from './Game';
import Board from "./Board";
import Square from "./Square";

function App() {
  return (
    <div className="App">
      <Board />
      <Square />
      <Game />
    </div>
  );
}

export default App;
