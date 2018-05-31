import { ADD_ARTICLE, GAME_STEP, GAME_BACKWORD } from "../constants/action-types";
import calculateWinner from '../../components/game/calculateWinner';
const initialState = {
  game: {
	history: [{
		squares: Array(9).fill(null).map((v, i) => i)
	}],
	xIsNext: true,
	stepNumber: 0
  },
  articles: []
};

const rootReducer = (state = initialState, action) => {
	const game = state.game;
	let history, xIsNext, stepNumber;
	switch (action.type) {
		case ADD_ARTICLE:
			// Array.prototype.push is an impuse function: it alters the original array
			//state.articles.push(action.payload);
			//return state;
			// Using Array.prototype.concat in place of Array.prototype.push is enough to keep the initial array immutable:
			// return { ...state, articles: state.articles.concat(action.payload) };
			// The resulting state is a copy of the initial state.
			return { ...state, articles: [...state.articles, action.payload] };
			// There are two key points for avoiding mutations in Redux:
			// Using concat(), slice(), and …spread for arrays
			// Using Object.assign() and …spread for objects
		case GAME_STEP:
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
		case GAME_BACKWORD:
			history = game.history.slice();
			xIsNext = (action.index % 2) === 0;
			stepNumber = action.index;
			return { ...state, game: {
				history: history,
				xIsNext: xIsNext,
				stepNumber: stepNumber
			} };
		default:
			return state;
	}
};

export default rootReducer;