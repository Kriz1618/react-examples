import React, { useEffect, useState } from 'react';

import { GameCircle } from './GameCircle';
import { Header } from './Header';
import { Footer } from './Footer';

import { isDraw, isWinner, getComputerMove } from './helper';
import {
  CLEAN_BOARD,
  PLAYER_1,
  PLAYER_2,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
  NO_PLAYER
} from './Constants';

export const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(CLEAN_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winnerPlayer, setWinnerPlayer] = useState();

  useEffect(() => {
    handleCleanGame();
  }, []);

  const circleClicked = (id) => {
    if (gameState === GAME_STATE_WIN) {
      return;
    }

    if (isWinner(gameBoard, id, currentPlayer)) {
      setWinnerPlayer(currentPlayer);
      setGameState(GAME_STATE_WIN);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setWinnerPlayer(NO_PLAYER);
      setGameState(GAME_STATE_DRAW);
    }

    setGameBoard(prev => {
      return prev.map((circle, idx) => {
        return idx === id ? currentPlayer : circle;
      });
    });

    setCurrentPlayer(currentPlayer === 1 ? PLAYER_2 : PLAYER_1);
  }

  const handleCleanGame = () => {
    setGameBoard(CLEAN_BOARD);
    setCurrentPlayer(PLAYER_1);
    setGameState(GAME_STATE_PLAYING);
  };

  const handleSuggestMove = () => {
    circleClicked(getComputerMove(gameBoard));
  };



  return (
    <>
      <Header player={currentPlayer} gameState={gameState} winner={winnerPlayer}/>
      <div className='gameBoard'>
        {gameBoard.map((value, index) => (
          <GameCircle key={index} id={index} onCircleClicked={circleClicked} className={`gameCircle player${value}`} />
        ))}
      </div>
      <Footer onClearGame={handleCleanGame} onSuggestMove={handleSuggestMove} disable={gameState !== GAME_STATE_PLAYING}/>
    </>
  )
};
