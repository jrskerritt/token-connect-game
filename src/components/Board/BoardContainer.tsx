import { useStoreSelector } from '../../redux/store';
import { Board } from './Board';

export default function BoardContainer(): JSX.Element {
  const boardState = useStoreSelector((state) => state.game.boardState);
  return <Board tokens={boardState} />;
}
