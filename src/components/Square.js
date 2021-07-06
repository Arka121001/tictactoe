import React from 'react'

const Square = ({value,onClick,isWinnigSquare}) => {
  return (
  <button type = "button"  
  onClick={onClick}
  className = {` square ${isWinnigSquare ? 'winning' : ''}
   ${value === 'x' ? 'text-green' : 'text-orange'}`}

  
  >
    {value}
    </button>
  );
}

export default Square
