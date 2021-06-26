import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchOpponentAction from '../api/fetchOpponentAction';
import GameResult from '../models/GameResult';
import Player from '../models/Player';
import Token from '../models/Token';
import checkBoardFull from '../rules/checkBoardFull';
import checkForWinner from '../rules/checkForWinner';
import createEmptyBoardState from '../rules/createEmptyBoardState';
import mapActionsToBoardState from '../rules/mapActionsToBoardState';

export interface GameState {
  actionHistory: number[];
  activePlayer?: Player;
  boardState: Token[][];
  gameResult?: GameResult;
  humanPlayer?: Player;
  opponentPlayer?: Player;
}

export const takeOpponentAction = createAsyncThunk(
  'game/takeOpponentAction',
  async (actionHistory: number[]): Promise<number[]> =>
    fetchOpponentAction(actionHistory)
);

export function getInitialGameState(): GameState {
  return {
    actionHistory: [],
    boardState: createEmptyBoardState(),
  };
}

function getNewGameStateFromActionHistory(
  state: GameState,
  newActionHistory: number[]
): GameState {
  const { boardState, lastAction } = mapActionsToBoardState(newActionHistory);
  const newState: GameState = {
    ...state,
    actionHistory: newActionHistory,
    boardState,
  };

  if (lastAction && checkForWinner(newState.boardState, lastAction)) {
    newState.gameResult =
      lastAction.player === newState.humanPlayer
        ? GameResult.YouWin
        : GameResult.YouLose;
  } else if (checkBoardFull(newState.boardState)) {
    newState.gameResult = GameResult.Draw;
  }

  return newState;
}

const gameSlice = createSlice({
  name: 'game',
  initialState: getInitialGameState(),
  reducers: {
    selectPlayerOrder(state, action: PayloadAction<Player>) {
      const player = action.payload;
      state.humanPlayer = player;
      state.opponentPlayer = player === Player.One ? Player.Two : Player.One;
      state.activePlayer = Player.One;
    },
    startNewGame() {
      return getInitialGameState();
    },
    takeHumanAction(state, action: PayloadAction<number>) {
      const newActionHistory = [...state.actionHistory, action.payload];
      return {
        ...getNewGameStateFromActionHistory(state, newActionHistory),
        activePlayer: state.opponentPlayer,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      takeOpponentAction.fulfilled,
      (state, action: PayloadAction<number[]>) => ({
        ...getNewGameStateFromActionHistory(state, action.payload),
        activePlayer: state.humanPlayer,
      })
    );
  },
});

export const { selectPlayerOrder, startNewGame, takeHumanAction } =
  gameSlice.actions;
export default gameSlice.reducer;
