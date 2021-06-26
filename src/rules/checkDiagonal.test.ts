import checkDiagonal from './checkDiagonal';
import Player from '../models/Player';

test('should return false for first move', () => {
  const result = checkDiagonal(
    [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, Player.One, null, null],
    ],
    { player: Player.One, row: 3, column: 1 },
    4
  );
  expect(result).toBe(false);
});

test('should return false if not found', () => {
  const result = checkDiagonal(
    [
      [null, null, Player.One, Player.Two],
      [null, Player.Two, Player.One, Player.One],
      [null, Player.One, Player.Two, Player.One],
      [Player.One, Player.Two, Player.Two, Player.Two],
    ],
    { player: Player.One, row: 0, column: 2 },
    4
  );
  expect(result).toBe(false);
});

test('should return true if top-left to bottom-right is found', () => {
  const result = checkDiagonal(
    [
      [Player.One, null, null, null],
      [Player.Two, Player.One, null, null],
      [Player.Two, Player.One, Player.One, Player.Two],
      [Player.Two, Player.Two, Player.One, Player.One],
    ],
    { player: Player.One, row: 0, column: 0 },
    4
  );
  expect(result).toBe(true);
});

test('should return true if bottom-left to top-right is found', () => {
  const result = checkDiagonal(
    [
      [null, null, null, Player.One],
      [null, null, Player.One, Player.Two],
      [null, Player.One, Player.Two, Player.Two],
      [Player.One, Player.Two, Player.One, Player.Two],
    ],
    { player: Player.One, row: 0, column: 3 },
    4
  );
  expect(result).toBe(true);
});

test('should work for non-standard board', () => {
  const result = checkDiagonal(
    [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, Player.Two, null],
      [null, null, Player.Two, Player.One, null],
      [null, Player.Two, Player.One, Player.One, null],
      [null, Player.One, Player.Two, Player.Two, null],
      [null, Player.One, Player.Two, Player.One, null],
    ],
    { player: Player.Two, row: 4, column: 1 },
    3
  );
  expect(result).toBe(true);
});
