import Player from '../models/Player';
import checkBoardFull from './checkBoardFull';

test('should return false if board is not empty', () => {
  const result = checkBoardFull([
    [null, Player.One, null, null],
    [Player.Two, Player.One, Player.Two, Player.One],
    [Player.One, Player.Two, Player.One, Player.Two],
    [Player.Two, Player.One, Player.Two, Player.One],
  ]);
  expect(result).toBe(false);
});

test('should return true if board is full', () => {
  const result = checkBoardFull([
    [Player.Two, Player.One, Player.Two, Player.One],
    [Player.Two, Player.One, Player.Two, Player.One],
    [Player.One, Player.Two, Player.One, Player.Two],
    [Player.Two, Player.One, Player.Two, Player.One],
  ]);
  expect(result).toBe(true);
});
