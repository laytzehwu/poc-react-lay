import React from 'react';
import { connect } from "react-redux";
import {
	calculateWinner,
	calcBackward,
	calcMovement,
	winningMessage
} from './helpers';
import { revertStep, makeAMove } from '../../store/actions';
import DumpBoard from './Board';
import Square from './Square';

class DumpGame extends React.Component {

	render() {

		const { history, stepNumber, xIsNext } = this.props;
		const current = history[stepNumber];
		const winner = calculateWinner(current.squares);
		const cellClick = (step) => {
			const payload = calcMovement(step, history, stepNumber, xIsNext);
		  this.props.makeAMove(step, payload);
		}
		const jumpTo = (step) => {
			const { history } = this.props;
			const payload = calcBackward(step, history);
			this.props.revertStep(step, payload);
		}
		const squares = [0,3,6].map((x) => {
		      return current.squares.slice(x, x+3);
		    }).map((row, i) => {
					return (
						<div className="board-row" key={i}>
					    {row.map((x) => (
								<Square value={x} cellClick={cellClick} />
							))}
						</div>
				  );
		   });
    const Board = () => (<DumpBoard squares={squares}/>);
		const moves = history.map((step, move) => {
		  const desc = move ?
			'Go to move #' + move :
			'Go to game start';
		  return (
				<li key={move}>
				  <button onClick={() => jumpTo(move)}>{desc}</button>
				</li>
		  );
		});

		return (
			<div className="game">
				<div className="game-board">
				  <Board />
				</div>
				<div className="game-info">
					<div>{winningMessage(winner, xIsNext)}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
		history: state.game.history,
		xIsNext: state.game.xIsNext,
		stepNumber: state.game.stepNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    revertStep: (value, payload) => dispatch(revertStep(value, payload)),
    makeAMove: (step, payload) => dispatch(makeAMove(step, payload))
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(DumpGame);

export default Game;
