import React from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//squares: Array(9).fill(null)
			//squares: Array(9).fill(null).map((v, i) => i),
			squares: props.squares,
			xIsNext: true
		};
	}
	
	handleClick(i) {
		
		if (this.props.onClick) {
			return this.props.onClick(i);
		}
		console.log('Missing click event from Game!');
		
		// Copy squares arry instead of mutating the existing array.
		const squares = this.state.squares.slice();
		// Stop update when winner is confirmed or value set
		if (calculateWinner(squares) || squares[i] === 'X' || squares[i] === 'O') {
		  return;
		}		
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});		
	}

	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
	}	
  
  render() {
	  const winner = calculateWinner(this.state.squares);
	  let status;
	  if (winner) {
		  status = 'Winner: ' + winner;
	  } else {
		  status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
	  }
	  
	  return (
		<div>
			<div className="board-row">
			{this.renderSquare(0)}
			{this.renderSquare(1)}
			{this.renderSquare(2)}
			</div>
			<div className="board-row">
			{this.renderSquare(3)}
			{this.renderSquare(4)}
			{this.renderSquare(5)}
			</div>
			<div className="board-row">
			{this.renderSquare(6)}
			{this.renderSquare(7)}
			{this.renderSquare(8)}
			</div>
		</div>
	  );
  }
}