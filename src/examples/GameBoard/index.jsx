import React from 'react';
import { GameBoard } from './GameBoard';

export const GameContainer = () => {
  return (
    <>
    <div className="page-title">
        <h1>Connect Game</h1>
      </div>
    <div className='board-container'>
      <GameBoard />
    </div>
    </>
  )
}
