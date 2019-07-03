import React from 'react';
import './Board.css';
import Square from './Square/Square';

const board = (props) => {
   return(
      <div className="Board">
         {props.boardState.map(sq => 
         <Square id={sq} boardState={props.boardState} 
                         handleClick={props.handleClick}
                         handleTransitionEnd={props.handleTransitionEnd} 
                         clicked={props.clicked[sq]}
                         key={sq} />)}
      </div>
   )
}

export default board;