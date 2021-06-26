import GameResult from '../models/GameResult';
import Player from '../models/Player';
import gameReducer, {
  GameState,
  getInitialGameState,
  selectPlayerOrder,
  startNewGame,
  takeHumanAction,
} from './game';

jest.mock('../api/fetchOpponentAction');

let state: GameState;

beforeEach(() => {
  state = getInitialGameState();
});

describe('selectPlayerOrder', () => {
  test('sets human player correctly when Player One is chosen', () => {
    const newState = gameReducer(state, selectPlayerOrder(Player.One));
    expect(newState.humanPlayer).toBe(Player.One);
  });

  test('sets human player correctly when Player Two is chosen', () => {
    const newState = gameReducer(state, selectPlayerOrder(Player.Two));
    expect(newState.humanPlayer).toBe(Player.Two);
  });

  test('sets opponent player correctly when Player One is chosen', () => {
    const newState = gameReducer(state, selectPlayerOrder(Player.One));
    expect(newState.opponentPlayer).toBe(Player.Two);
  });

  test('sets opponent player correctly when Player Two is chosen', () => {
    const newState = gameReducer(state, selectPlayerOrder(Player.Two));
    expect(newState.opponentPlayer).toBe(Player.One);
  });

  test('sets the active player to Player One', () => {
    const newState = gameReducer(state, selectPlayerOrder(Player.Two));
    expect(newState.activePlayer).toBe(Player.One);
  });
});

describe('startNewGame', () => {
  test('sets state to the initial state', () => {
    const newState = gameReducer(state, startNewGame());
    expect(newState).toStrictEqual(getInitialGameState());
  });
});

describe('takeHumanAction', () => {
  beforeEach(() => {
    state.humanPlayer = Player.One;
    state.opponentPlayer = Player.Two;
  });

  test('updates actionHistory', () => {
    const newState = gameReducer(state, takeHumanAction(2));
    expect(newState.actionHistory).toStrictEqual([2]);
  });

  test('updates boardState', () => {
    const newState = gameReducer(state, takeHumanAction(2));
    expect(newState.boardState).toStrictEqual([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, Player.One, null],
    ]);
  });

  test('does not set the game result if no win condition is met', () => {
    const newState = gameReducer(state, takeHumanAction(2));
    expect(newState.gameResult).toBeUndefined();
  });

  test('sets the game result if a win condition is met', () => {
    state.actionHistory = [0, 1, 0, 2, 0, 3];
    const newState = gameReducer(state, takeHumanAction(0));
    expect(newState.gameResult).toBe(GameResult.YouWin);
  });

  test('sets the game result to Draw if the board is full and no win condition is met', () => {
    state.actionHistory = [0, 1, 2, 3, 3, 2, 1, 0, 0, 1, 2, 3, 2, 3, 0, 1];
    const newState = gameReducer(state, takeHumanAction(0));
    expect(newState.gameResult).toBe(GameResult.Draw);
  });

  test('makes the opponent the active player', () => {
    const newState = gameReducer(state, takeHumanAction(2));
    expect(newState.activePlayer).toBe(Player.Two);
  });
});
