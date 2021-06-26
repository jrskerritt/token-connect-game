import PlayerAction from '../models/PlayerAction';
import Token from '../models/Token';

export default function checkVertical(
  boardState: Token[][],
  action: PlayerAction,
  tokensToWin: number
): boolean {
  let consecutiveTokens = 1;
  for (let i = 1; i < tokensToWin; i++) {
    const nextRowDown = action.row + i;
    if (
      boardState[nextRowDown] &&
      boardState[nextRowDown][action.column] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  return consecutiveTokens >= tokensToWin;
}
