import { render } from '@testing-library/react';
import GameResult from '../../models/GameResult';
import Player from '../../models/Player';
import { GameStatus as GameStatusComponent } from './GameStatus';

test('should show player order selection when there is no active player', () => {
  const { getByText } = render(
    <GameStatusComponent
      activePlayer={undefined}
      gameResult={GameResult.Draw}
      humanPlayer={Player.One}
      onSelectPlayerOrder={jest.fn()}
      onStartNewGame={jest.fn()}
    />
  );

  expect(() => getByText(/go first or second/)).not.toThrow();
});

test('should show turn indicator when there is an active player and no result', () => {
  const { getByText } = render(
    <GameStatusComponent
      activePlayer={Player.One}
      gameResult={undefined}
      humanPlayer={Player.One}
      onSelectPlayerOrder={jest.fn()}
      onStartNewGame={jest.fn()}
    />
  );

  expect(() => getByText(/turn/i)).not.toThrow();
});

test('should show new game button when there is an active player and a defined result', () => {
  const { getByText } = render(
    <GameStatusComponent
      activePlayer={Player.One}
      gameResult={GameResult.YouWin}
      humanPlayer={Player.One}
      onSelectPlayerOrder={jest.fn()}
      onStartNewGame={jest.fn()}
    />
  );

  expect(getByText(/New Game/i)).not.toBeDisabled();
});
