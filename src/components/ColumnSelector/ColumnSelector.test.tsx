import { render } from '@testing-library/react';
import GameResult from '../../models/GameResult';
import Player from '../../models/Player';
import createEmptyBoardState from '../../rules/createEmptyBoardState';
import { ColumnSelector } from './ColumnSelector';

function checkAllButtonsDisabled(container: HTMLElement) {
  return Array.from(container.getElementsByTagName('button')).every(
    (button) => button.disabled
  );
}

test('should disable buttons if no active player', () => {
  const { container } = render(
    <ColumnSelector
      activePlayer={undefined}
      boardState={createEmptyBoardState(4, 4)}
      humanPlayer={Player.Two}
      gameResult={undefined}
      onSelect={jest.fn()}
    />
  );
  expect(checkAllButtonsDisabled(container)).toBe(true);
});

test('should disable buttons if no human player', () => {
  const { container } = render(
    <ColumnSelector
      activePlayer={Player.One}
      boardState={createEmptyBoardState(4, 4)}
      humanPlayer={undefined}
      gameResult={undefined}
      onSelect={jest.fn()}
    />
  );
  expect(checkAllButtonsDisabled(container)).toBe(true);
});

test('should disable buttons if it is not the human player turn', () => {
  const { container } = render(
    <ColumnSelector
      activePlayer={Player.One}
      boardState={createEmptyBoardState(4, 4)}
      humanPlayer={Player.Two}
      gameResult={undefined}
      onSelect={jest.fn()}
    />
  );
  expect(checkAllButtonsDisabled(container)).toBe(true);
});

test('should disable buttons if the game is over', () => {
  const { container } = render(
    <ColumnSelector
      activePlayer={Player.One}
      boardState={createEmptyBoardState(4, 4)}
      gameResult={GameResult.Draw}
      humanPlayer={Player.One}
      onSelect={jest.fn()}
    />
  );
  expect(checkAllButtonsDisabled(container)).toBe(true);
});

test('should disable buttons for columns that are full', () => {
  const boardState = createEmptyBoardState(4, 4);
  boardState[3][1] = Player.One;
  boardState[2][1] = Player.Two;
  boardState[1][1] = Player.One;
  boardState[0][1] = Player.Two;
  const { container } = render(
    <ColumnSelector
      activePlayer={Player.One}
      boardState={boardState}
      humanPlayer={Player.One}
      gameResult={undefined}
      onSelect={jest.fn()}
    />
  );
  expect(container.getElementsByTagName('button')[1]).toBeDisabled();
});

test('should enable buttons if it is the human player turn', () => {
  const { container } = render(
    <ColumnSelector
      activePlayer={Player.One}
      boardState={createEmptyBoardState(4, 4)}
      humanPlayer={Player.One}
      gameResult={undefined}
      onSelect={jest.fn()}
    />
  );
  expect(checkAllButtonsDisabled(container)).toBe(false);
});
