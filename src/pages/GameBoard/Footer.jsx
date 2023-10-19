import React from 'react';

export const Footer = ({ onClearGame, onSuggestMove, disable }) => {
  return (
    <div className='panel footer'>
      {
        disable ? (
          <button className='new-game' onClick={onClearGame}>New Game</button>
        ) : (
          <>
            <button onClick={onClearGame}>Restore</button>
            <button onClick={onSuggestMove}>Suggest</button>
          </>
        )
      }
      
      
    </div>
  )
}
