import createEmptyBoardState from './createEmptyBoardState';

test('should work', () => {
  const boardState = createEmptyBoardState(4, 4);
  expect(boardState).toStrictEqual([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);
});
