import Token from '../../models/Token';
import { Token as TokenComponent } from '../Token';
import './Board.scss';

export interface BoardProps {
  tokens: Token[][];
}

export function Board({ tokens }: BoardProps): JSX.Element {
  return (
    <div className="board">
      {tokens.map((row, rowIndex) => (
        // Disabling this rule as an exception -- there are no
        // other suitable keys here than the array indexes.
        /* eslint-disable react/no-array-index-key */
        <div key={rowIndex} className="board__row">
          {row.map((token, columnIndex) => (
            <div key={columnIndex} className="board__cell">
              {token !== null && <TokenComponent player={token} />}
            </div>
          ))}
        </div>
        /* eslint-enable react/no-array-index-key */
      ))}
    </div>
  );
}
