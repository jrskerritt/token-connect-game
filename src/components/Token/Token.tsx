import Player from '../../models/Player';
import './Token.scss';

export interface TokenProps {
  player: Player;
}

export function Token({ player }: TokenProps): JSX.Element {
  const playerClassName = player === Player.One ? 'token--one' : 'token--two';
  return <div className={`token ${playerClassName}`} />;
}
