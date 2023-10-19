import React from 'react';

export const GameCircle = ({ id, children, onCircleClicked, className }) => {

  return (
    <div className={className} onClick={() => onCircleClicked(id)}>
      {children}
    </div>
  )
};
