import { takeHumanAction } from '../../redux/game';
import { useStoreDispatch, useStoreSelector } from '../../redux/store';
import { ColumnSelector } from './ColumnSelector';

export default function BoardContainer(): JSX.Element {
  const dispatch = useStoreDispatch();
  const { activePlayer, boardState, gameResult, humanPlayer } =
    useStoreSelector((state) => state.game);
  return (
    <ColumnSelector
      activePlayer={activePlayer}
      boardState={boardState}
      gameResult={gameResult}
      humanPlayer={humanPlayer}
      onSelect={(column) => dispatch(takeHumanAction(column))}
    />
  );
}
