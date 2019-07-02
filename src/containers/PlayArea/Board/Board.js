import React from 'react';
import './Board.css';
import Square from './Square/Square';

const board = (props) => {
   return(
      <div className="Board">
         {/* 2 for loops or flexbox/css grid to draw a 4x4 board, fixed for now */}
         {props.boardState.map(sq => <Square id={sq} />)}

  
      </div>
   )
}

export default board;