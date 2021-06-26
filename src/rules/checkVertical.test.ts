import checkVertical from './checkVertical';
import Player from '../models/Player';

test('should return false for first move', () => {
  const result = checkVertical(
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
  const result = checkVertical(
    [
      [null, null, null, null],
      [null, Player.One, Player.Two, null],
      [null, Player.One, Player.Two, null],
      [null, Player.One, Player.Two, null],
    ],
    { player: Player.One, row: 1, column: 1 },
    4
  );
  expect(result).toBe(false);
});

test('should return true if found', () => {
  const result = checkVertical(
    [
      [null, Player.One, null, null],
      [null, Player.One, Player.Two, null],
      [null, Player.One, Player.Two, null],
      [null, Player.One, Player.Two, null],
    ],
    { player: Player.One, row: 0, column: 1 },
    4
  );
  expect(result).toBe(true);
});
