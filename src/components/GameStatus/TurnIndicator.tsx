import Player from '../../models/Player';

export interface TurnIndicatorProps {
  activePlayer: Player;
  humanPlayer: Player;
}

const className = 'turn-indicator';

export function TurnIndicator({
  activePlayer,
  humanPlayer,
}: TurnIndicatorProps): JSX.Element {
  const playerClassName =
    activePlayer === Player.One ? `${className}--one` : `${className}--two`;
  return (
    <span className={`${className} ${playerClassName}`}>
      {activePlayer === humanPlayer ? 'Your' : "Opponent's"} turn
    </span>
  );
}
