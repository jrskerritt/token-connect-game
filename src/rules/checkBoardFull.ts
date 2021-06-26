import Token from '../models/Token';

export default function checkBoardFull(boardState: Token[][]): boolean {
  for (let column = 0; column < boardState[0].length; column++) {
    if (boardState[0][column] === null) {
      return false;
    }
  }

  return true;
}
