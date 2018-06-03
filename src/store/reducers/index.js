import { MAKE_A_MOVE, REVERT_STEP } from "../constants/action-types";
const initialState = {
  game: {
	  history: [{
		  squares: Array(9).fill(null).map((v,i) => i)
	  }],
	  xIsNext: true,
	  stepNumber: 0
  },
  articles: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case MAKE_A_MOVE: {
			const { history, xIsNext, stepNumber } = action.payload;
			return {
				...state,
				game: {
					history,
					xIsNext,
					stepNumber
				}
			};
		}
		case REVERT_STEP: {
			const { history, xIsNext, stepNumber } = action.payload;
			return {
				...state,
				game: {
					history,
					xIsNext,
					stepNumber
				}
			};
		}
		default:
			return state;
	}
};

export default rootReducer;
