import PlayerAction from '../models/PlayerAction';
import Token from '../models/Token';

export default function checkHorizontal(
  boardState: Token[][],
  action: PlayerAction,
  tokensToWin: number
): boolean {
  let consecutiveTokens = 1;
  for (let i = 1; i < tokensToWin; i++) {
    const nextColumnRight = action.column + i;
    if (
      boardState[action.row] &&
      boardState[action.row][nextColumnRight] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  for (let i = 1; i < tokensToWin; i++) {
    const nextColumnLeft = action.column - i;
    if (
      boardState[action.row] &&
      boardState[action.row][nextColumnLeft] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  return consecutiveTokens >= tokensToWin;
}
