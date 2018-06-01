const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
export const calculateWinner = (squares) => {
	if (squares) {
		for (let i = 0; i < lines.length; i ++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			  return squares[a];
			}		
		}
	}
	return null;
};

// For reducer
export const makeGameState = () => {
	return {
	history: [{
		squares: Array(9).fill(null).map((v, i) => i)
	}],
	xIsNext: true,
	stepNumber: 0
  }
}

// For reducer use
export const stepGameHandler = (state, action) => {
	const game = state.game;
	let history, xIsNext, stepNumber;
	history = game.history.slice(0, game.stepNumber + 1);
	const current = history[history.length - 1];
	const squares = current.squares.slice();
	const preVal = squares[action.index];
	xIsNext = game.xIsNext;
	stepNumber = game.stepNumber;
	if (!calculateWinner(squares) && preVal !== 'X' && preVal !== 'O') {
		xIsNext = !game.xIsNext;
		stepNumber ++;
		squares[action.index] = game.xIsNext ? 'X' : 'O';
		history.push({squares});
	}
	return { ...state, game: {
		history: history,
		xIsNext: xIsNext,
		stepNumber: stepNumber
	} };
}
// For reducer use
export const backGameHandler = (state, action) => {
	const game = state.game;
	let history, xIsNext, stepNumber;
	history = game.history.slice();
	xIsNext = (action.index % 2) === 0;
	stepNumber = action.index;
	return { ...state, game: {
		history: history,
		xIsNext: xIsNext,
		stepNumber: stepNumber
	} };
}

export default { calculateWinner, makeGameState, stepGameHandler, backGameHandler };