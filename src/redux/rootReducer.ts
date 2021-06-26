import { combineReducers } from '@reduxjs/toolkit';
import gameReducer from './game';

const rootReducer = combineReducers({ game: gameReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
