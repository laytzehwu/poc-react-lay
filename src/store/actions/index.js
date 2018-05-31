import { ADD_ARTICLE, GAME_STEP, GAME_BACKWORD } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const stepGame = index => ({ type: GAME_STEP, index: index });
export const backGame = index => ({ type: GAME_BACKWORD, index: index });