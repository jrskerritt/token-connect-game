import config from '../../app.config';
import Token from '../models/Token';

export default function createEmptyBoardState(height?: number, width?: number) {
  const resolvedHeight = height || config.boardHeight;
  const resolvedWidth = width || config.boardWidth;
  const boardState: Token[][] = [];

  for (let i = 0; i < resolvedHeight; i++) {
    boardState.push([]);
    for (let j = 0; j < resolvedWidth; j++) {
      boardState[i].push(null);
    }
  }

  return boardState;
}
