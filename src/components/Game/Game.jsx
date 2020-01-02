import React from 'react'
import Board from './Board';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      isNext: true
    }
  }
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
