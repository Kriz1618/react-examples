import React from 'react';

const CalculatorButton = ({ value, onClick, className }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>{value}</button>
  )
}

export default CalculatorButton;