import React from 'react'

 const StatusMessage = ({ winner , current }) => {


  const noMoveLeft = current.board.every((el) => el !== null);
  return (
    <div className = "status-message">
      {winner && <>
      
      winner is <span className = {winner === 'x' ? 'text-green' : 'text-orange'}>
        {winner}</span>
      
      </>} 
      {!winner && !noMoveLeft && 
      <>
      Next Player is <span className = {current.isXNext ? 'text-green' : 'text-orange'}> {current.isXNext ? 'x':'o'} </span>
      </>}


      {!winner && noMoveLeft && <>
      <span className ="text-green">x</span>  <span className = "text-orange">o</span> tied
      </>}
    </div>
  );
};

export default StatusMessage;

