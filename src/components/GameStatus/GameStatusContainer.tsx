import { useEffect } from 'react';
import {
  selectPlayerOrder,
  startNewGame,
  takeOpponentAction,
} from '../../redux/game';
import { useStoreDispatch, useStoreSelector } from '../../redux/store';
import { GameStatus } from './GameStatus';

export default function GameStatusContainer(): JSX.Element {
  const dispatch = useStoreDispatch();
  const {
    actionHistory,
    activePlayer,
    gameResult,
    humanPlayer,
    opponentPlayer,
  } = useStoreSelector((state) => state.game);

  useEffect(() => {
    if (activePlayer === undefined || gameResult !== undefined) {
      return;
    }
    if (activePlayer === opponentPlayer) {
      // Arbitrarily wait 1.2 seconds to make it look like the opponent
      // service is thinking
      setTimeout(() => {
        dispatch(takeOpponentAction(actionHistory));
      }, 1200);
    }
  }, [activePlayer]);

  return (
    <GameStatus
      activePlayer={activePlayer}
      gameResult={gameResult}
      humanPlayer={humanPlayer}
      onSelectPlayerOrder={(player) => dispatch(selectPlayerOrder(player))}
      onStartNewGame={() => dispatch(startNewGame())}
    />
  );
}
