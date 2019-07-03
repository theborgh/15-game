import React from 'react';
import * as constants from '../../../../constants';
import './Square.css';

const square = (props) => {

   // Is the current square clickable? If so, what direction should it go? 
   const isSquareClickable = (sqId) => {

      // find the index of the current square
      let indexOfSq = props.boardState.indexOf(sqId);

      // check left side
      if (indexOfSq % 4 !== 0 && props.boardState[indexOfSq - 1] === 0) {
         return constants.DIR_LEFT;
      }
      // check right side
      if (indexOfSq !== 3 && indexOfSq !== 7 && indexOfSq !== 11 && indexOfSq !== 15 &&
         props.boardState[indexOfSq + 1] === 0) {
         return constants.DIR_RIGHT;
      }
      // check up
      if (indexOfSq >= 4 && props.boardState[indexOfSq - 4] === 0) {
         return constants.DIR_UP;
      }
      // check down
      if (indexOfSq <= 11 && props.boardState[indexOfSq + 4] === 0) {
         return constants.DIR_DOWN;
      }

      return false;
   }

      const move_direction = isSquareClickable(props.id);
      const clickable = move_direction ? 'clickable' : '';
      let directionClass = '';

      if (clickable && props.clicked) {
         
         switch (move_direction) {
            case constants.DIR_UP:
               directionClass = 'clickable-up';
               break;
            case constants.DIR_DOWN:
               directionClass = 'clickable-down';
               break;
            case constants.DIR_LEFT:
               directionClass = 'clickable-left';
               break;
            case constants.DIR_RIGHT:
               directionClass = 'clickable-right';
               break;

            default:
               directionClass = 0;
         }
         console.log(directionClass)
      }

      const classes = `Square ${clickable} ${directionClass}`;
      let square = <div className={classes} 
                        onClick={() => props.handleClick(clickable, props.id)}
                        /* onTransitionEnd={() => props.handleTransitionEnd(props.id)} */ >
         {props.id}</div>;

      if (props.id === 0) {
         square = <div className="EmptySquare"></div>
      }

      return (square)
   
}

export default square;