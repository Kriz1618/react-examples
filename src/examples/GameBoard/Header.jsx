import React from 'react';
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN } from './Constants';

export const Header = ({ player, gameState, winner }) => {
  const classes = 'panel header';

  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {player} turn</div>
      case GAME_STATE_WIN:
        return <div>Player {winner} wins</div>
      case GAME_STATE_DRAW:
        return <div>Game is a Draw</div>
      default:
    }
  }

  return (
    <div className={`${classes} ${GAME_STATE_WIN === gameState ? 'winner' : ''}`}>
      <div className='header-text'>{renderLabel()}</div>
    </div>
  );
};
