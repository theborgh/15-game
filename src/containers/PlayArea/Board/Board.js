import React from 'react';
import './Board.css';
import Square from './Square/Square';

const board = (props) => {
   return(
      <div className="Board">
         {props.boardState.map(sq => <Square id={sq} boardState={props.boardState} />)}
      </div>
   )
}

export default board;