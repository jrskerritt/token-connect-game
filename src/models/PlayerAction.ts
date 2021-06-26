import Player from './Player';

interface PlayerAction {
  column: number;
  player: Player;
  row: number;
}

export default PlayerAction;
