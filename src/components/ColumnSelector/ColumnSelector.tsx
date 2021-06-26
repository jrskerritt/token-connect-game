import { ChevronDown } from 'react-feather';
import GameResult from '../../models/GameResult';
import Player from '../../models/Player';
import Token from '../../models/Token';
import './ColumnSelector.scss';

export interface ColumnSelectorProps {
  activePlayer?: Player;
  boardState: Token[][];
  gameResult?: GameResult;
  humanPlayer?: Player;
  onSelect: (column: number) => void;
}

export function ColumnSelector({
  activePlayer,
  boardState,
  gameResult,
  humanPlayer,
  onSelect,
}: ColumnSelectorProps): JSX.Element {
  const buttons = [];
  for (let column = 0; column < boardState[0].length; column++) {
    const choosingOrder =
      activePlayer === undefined || humanPlayer === undefined;
    const gameIsOver = gameResult !== undefined;
    const isOpponentTurn = activePlayer !== humanPlayer;
    const columnFull = boardState[0][column] !== null;
    buttons.push(
      <button
        key={column}
        type="button"
        disabled={choosingOrder || gameIsOver || isOpponentTurn || columnFull}
        onClick={() => onSelect(column)}
      >
        <ChevronDown />
      </button>
    );
  }

  return <div className="column-selector">{buttons}</div>;
}
