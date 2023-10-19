import React from 'react';
import { Board } from './Board';

export const MemoryGame = () => {
  return (
    <>
      <div className="page-title">
          <h1>Memory Game</h1>
      </div>
      <div className='board-container'>
        <Board />
      </div>
    </>
  )
}
