import PlayerAction from '../models/PlayerAction';
import Token from '../models/Token';

export default function checkDiagonal(
  boardState: Token[][],
  action: PlayerAction,
  tokensToWin: number
): boolean {
  // Top-left to bottom-right
  let consecutiveTokens = 1;
  for (let i = 1; i < tokensToWin; i++) {
    const nextRowDown = action.row + i;
    const nextColumnRight = action.column + i;
    if (
      boardState[nextRowDown] &&
      boardState[nextRowDown][nextColumnRight] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  for (let i = 1; i < tokensToWin; i++) {
    const nextRowUp = action.row - i;
    const nextColumnLeft = action.column - i;
    if (
      boardState[nextRowUp] &&
      boardState[nextRowUp][nextColumnLeft] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  if (consecutiveTokens >= tokensToWin) {
    return true;
  }

  // Bottom-left to top-right
  consecutiveTokens = 1;
  for (let i = 1; i < tokensToWin; i++) {
    const nextRowDown = action.row + i;
    const nextColumnLeft = action.column - i;
    if (
      boardState[nextRowDown] &&
      boardState[nextRowDown][nextColumnLeft] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  for (let i = 1; i < tokensToWin; i++) {
    const nextRowUp = action.row - i;
    const nextColumnRight = action.column + i;
    if (
      boardState[nextRowUp] &&
      boardState[nextRowUp][nextColumnRight] === action.player
    ) {
      consecutiveTokens++;
    } else {
      break;
    }
  }

  return consecutiveTokens >= tokensToWin;
}
