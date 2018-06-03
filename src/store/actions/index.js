import { MAKE_A_MOVE, REVERT_STEP } from "../constants/action-types";
export const makeAMove = (index, payload) => ({ type: MAKE_A_MOVE, index, payload });
export const revertStep = (index, payload) => ({ type: REVERT_STEP, index, payload });
