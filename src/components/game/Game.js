import React from 'react';
import { connect } from "react-redux";
import { calculateWinner } from './helpers';
import { backGame, stepGame } from '../../store/actions';
import Board from './Board';
import Square from './Square';

class ConnectedGame extends React.Component {

	jumpTo(step) {
		this.props.backGame(step);
	}

	render() {

		const history = this.props.history;
		const current = history[this.props.stepNumber];
		const winner = calculateWinner(current.squares);

		const cellClick = (idx) => {
		  this.props.stepGame(idx);
		}

    const squares = [0, 1, 2].map((x, i) => {
		  const inc = (v) => v + (2 * i);
			return (
				<div className="board-row" key={x}>
				  <Square idx={inc(x + 0)} cellClick={cellClick} />
				  <Square idx={inc(x + 1)} cellClick={cellClick} />
				  <Square idx={inc(x + 2)} cellClick={cellClick} />
				</div>
		  );
		})

		const moves = history.map((step, move) => {
		  const desc = move ?
			'Go to move #' + move :
			'Go to game start';
		  return (
			<li key={move}>
			  <button onClick={() => this.jumpTo(move)}>{desc}</button>
			</li>
		  );
		});

		let status;
		if (winner) {
		  status = 'Winner: ' + winner;
		} else {
		  status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
		}
		return (
			<div className="game">
				<div className="game-board">
				  <Board squares={squares}/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

// Generate dynamic state
const mapStateToProps = state => {
  return {
	history: state.game.history,
	xIsNext: state.game.xIsNext,
	stepNumber: state.game.stepNumber
  };
};
const mapDispatchToProps = dispatch => {
  return {
    backGame: value => dispatch(backGame(value)),
    stepGame: idx => dispatch(stepGame(idx))
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(ConnectedGame);

export default Game;
