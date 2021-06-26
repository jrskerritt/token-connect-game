import config from '../../app.config';
import PlayerAction from '../models/PlayerAction';
import Token from '../models/Token';
import checkDiagonal from './checkDiagonal';
import checkHorizontal from './checkHorizontal';
import checkVertical from './checkVertical';

export default function checkForWinner(
  boardState: Token[][],
  action: PlayerAction
): boolean {
  const { tokensToWin } = config;
  return (
    checkDiagonal(boardState, action, tokensToWin) ||
    checkHorizontal(boardState, action, tokensToWin) ||
    checkVertical(boardState, action, tokensToWin)
  );
}
