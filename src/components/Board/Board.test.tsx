import { render } from '@testing-library/react';
import createEmptyBoardState from '../../rules/createEmptyBoardState';
import Player from '../../models/Player';
import { Board } from './Board';

test('should display the correct number of cells', () => {
  const { container } = render(<Board tokens={createEmptyBoardState(4, 4)} />);
  const cells = container.querySelectorAll('.board__cell');
  expect(cells.length).toBe(16);
});

test('should display the tokens in the correct cells', () => {
  const tokens = createEmptyBoardState(4, 4);
  tokens[3][1] = Player.One;
  tokens[3][2] = Player.Two;
  const { container } = render(<Board tokens={tokens} />);
  const tokenElements = container.querySelectorAll('.token');
  expect(tokenElements.length).toBe(2);
});
