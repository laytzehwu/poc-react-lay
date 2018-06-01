import { ADD_ARTICLE, GAME_STEP, GAME_BACKWORD } from "../constants/action-types";
import { utl } from '../../components/game';
const initialState = {
  game: utl.makeGameState(),
  articles: []
};

const rootReducer = (state = initialState, action) => {
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
			return utl.stepGameHandler(state, action);
		case GAME_BACKWORD:
			return utl.backGameHandler(state, action);
		default:
			return state;
	}
};

export default rootReducer;