import GameResult from '../../models/GameResult';
import Player from '../../models/Player';
import { SelectPlayerOrder } from './SelectPlayerOrder';
import { TurnIndicator } from './TurnIndicator';
import { GameOver } from './GameOver';
import './GameStatus.scss';

export interface GameStatusProps {
  activePlayer?: Player;
  gameResult?: GameResult;
  humanPlayer?: Player;
  onSelectPlayerOrder: (player: Player) => void;
  onStartNewGame: () => void;
}

export function GameStatus({
  activePlayer,
  gameResult,
  humanPlayer,
  onSelectPlayerOrder,
  onStartNewGame,
}: GameStatusProps): JSX.Element {
  let content;
  if (activePlayer === undefined) {
    content = <SelectPlayerOrder onSelect={onSelectPlayerOrder} />;
  } else if (humanPlayer !== undefined && gameResult === undefined) {
    content = (
      <TurnIndicator activePlayer={activePlayer} humanPlayer={humanPlayer} />
    );
  } else if (gameResult !== undefined) {
    content = (
      <GameOver gameResult={gameResult} onStartNewGame={onStartNewGame} />
    );
  }

  return <div className="game-status">{content}</div>;
}
