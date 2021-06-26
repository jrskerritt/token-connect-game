import checkHorizontal from './checkHorizontal';
import Player from '../models/Player';

test('should return false for first move', () => {
  const result = checkHorizontal(
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
  const result = checkHorizontal(
    [
      [null, null, null, null],
      [null, null, null, null],
      [Player.Two, Player.One, Player.Two, Player.Two],
      [Player.One, Player.Two, Player.One, Player.Two],
    ],
    { player: Player.Two, row: 2, column: 2 },
    4
  );
  expect(result).toBe(false);
});

test('should return true if found', () => {
  const result = checkHorizontal(
    [
      [null, null, null, null],
      [Player.One, Player.One, null, null],
      [Player.Two, Player.Two, Player.Two, Player.Two],
      [Player.One, Player.One, Player.One, Player.Two],
    ],
    { player: Player.Two, row: 2, column: 3 },
    4
  );
  expect(result).toBe(true);
});
