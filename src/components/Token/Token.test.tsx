import { render } from '@testing-library/react';
import Player from '../../models/Player';
import { Token } from './Token';

test('should be red for player one', () => {
  const { container } = render(<Token player={Player.One} />);
  expect(container.children[0].className).toContain('token--one');
});

test('should be blue for player two', () => {
  const { container } = render(<Token player={Player.Two} />);
  expect(container.children[0].className).toContain('token--two');
});
