import { useState, useEffect } from 'react';

import Cards from './Cards';

export const Board = () => {
  const [correctMoves, setCorrectMoves] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [winner, setWinner] = useState(false);

  const onValidateBoard = (moves, correct) => {
    setCorrectMoves(correct)
    setTotalMoves(moves)
  }

  useEffect(() => {
    setWinner(correctMoves === 8);
  },[correctMoves, setWinner])

  return (
    <>
      <h2 hidden={!winner}>You won in {totalMoves} moves!!!</h2>
      <Cards handledMoves={onValidateBoard}/>
    </>
  )
};
