import Player from '../models/Player';
import PlayerAction from '../models/PlayerAction';
import Token from '../models/Token';
import createEmptyBoardState from './createEmptyBoardState';

interface MapActionsToBoardStateResult {
  boardState: Token[][];
  lastAction?: PlayerAction;
}

/*
  `actions` here is the raw array of moves that is given to us from the
  game service which represents the order of columns in which tokens
  were placed.
*/
export default function mapActionsToBoardState(
  actions: number[]
): MapActionsToBoardStateResult {
  const boardState = createEmptyBoardState();
  let player = Player.One;
  let lastAction: PlayerAction | undefined;
  actions.forEach((column, actionIndex) => {
    for (let row = boardState.length - 1; row >= 0; row--) {
      if (boardState[row][column] === null) {
        if (actionIndex === actions.length - 1) {
          lastAction = { column, row, player };
        }
        boardState[row][column] = player;
        player = player === Player.One ? Player.Two : Player.One;
        break;
      }
    }
  });

  return {
    boardState,
    lastAction,
  };
}
