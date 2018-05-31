import React from 'react';
import { connect } from "react-redux";

//import Square from './Square';
import Board from './Board';
import calculateWinner from './calculateWinner';
import { backGame } from '../../store/actions'; 

class ConnectedGame extends React.Component {

	jumpTo(step) {
		this.props.backGame(step);
	}
	
	render() {
		const history = this.props.history;
		//const current = history[history.length - 1];
		const current = history[this.props.stepNumber];
		const winner = calculateWinner(current.squares);

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
					<Board
						squares={current.squares}
						xIsNext={this.props.xIsNext}
						winner={winner}
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
    backGame: value => dispatch(backGame(value))
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(ConnectedGame);

export default Game;