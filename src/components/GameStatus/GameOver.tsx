import GameResult from '../../models/GameResult';

export interface GameOverProps {
  gameResult: GameResult;
  onStartNewGame: () => void;
}

export function GameOver({
  gameResult,
  onStartNewGame,
}: GameOverProps): JSX.Element {
  let resultMessage;
  switch (gameResult) {
    case GameResult.YouWin:
      resultMessage = 'You win!';
      break;
    case GameResult.YouLose:
      resultMessage = 'You lose...';
      break;
    default:
      resultMessage = 'Draw!';
  }

  return (
    <>
      <p>{resultMessage}</p>
      <button type="button" onClick={onStartNewGame}>
        New Game
      </button>
    </>
  );
}
