import Player from '../models/Player';
import mapActionsToBoardState from './mapActionsToBoardState';

test('should return correct boardState for empty actions', () => {
  const result = mapActionsToBoardState([]);
  expect(result.boardState).toStrictEqual([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
});

test('should return correct boardState for normal actions', () => {
  const result = mapActionsToBoardState([0, 0, 3, 2, 3]);
  expect(result.boardState).toStrictEqual([
    [null, null, null, null],
    [null, null, null, null],
    [Player.Two, null, null, Player.One],
    [Player.One, null, Player.Two, Player.One],
  ]);
});

test('should return undefined lastAction for empty actions', () => {
  const result = mapActionsToBoardState([]);
  expect(result.lastAction).toBeUndefined();
});

test('should return correct lastAction for normal actions', () => {
  const result = mapActionsToBoardState([0, 0, 3, 2, 3]);
  expect(result.lastAction).toStrictEqual({
    column: 3,
    row: 2,
    player: Player.One,
  });
});
