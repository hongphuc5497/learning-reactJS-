import React from 'react'
import Board from './Board';
import calcWinner from '../../utils/common';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      isNext: true
    };
  }

  handleClick(i) {
    const isNext = this.state.isNext;
    const history = this.state.history;
    const current = this.history[history.length -1];
    const squares = current.squares.slice();

    if (calcWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      isNext: !isNext
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner  = calcWinner(current.squares); 
    let status = winner ? 'Winner: ' + winner : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div className="game">
        <div className="game-board">
          <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
