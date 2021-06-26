import Player from '../../models/Player';

export interface SelectPlayerOrderProps {
  onSelect: (player: Player) => void;
}

export function SelectPlayerOrder({
  onSelect,
}: SelectPlayerOrderProps): JSX.Element {
  return (
    <>
      <p>To start playing, choose whether to go first or second.</p>
      <button type="button" onClick={() => onSelect(Player.One)}>
        First
      </button>
      <button type="button" onClick={() => onSelect(Player.Two)}>
        Second
      </button>
    </>
  );
}
