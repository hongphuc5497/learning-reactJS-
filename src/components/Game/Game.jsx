import React from 'react';
import Board from './Board';
import calcWinner from '../../utils/common';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const stepNumber = this.state.stepNumber;
    const xIsNext    = this.state.xIsNext;
    const history    = this.state.history.slice(0, stepNumber + 1);
    const current    = history[history.length - 1];
    const squares    = current.squares.slice();

    if (calcWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }
  
  render() {
    const stepNumber = this.state.stepNumber;
    const history = this.state.history;
    const current = history[stepNumber];
    console.log(current)
    const winner  = calcWinner(current.squares);
    
    const moves = history.map((_step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to  game start';
      
      return ( 
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });
    
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
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
