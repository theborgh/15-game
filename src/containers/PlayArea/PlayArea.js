import React from 'react';
import Board from './Board/Board';
import SideMenu from './SideMenu/SideMenu';
import './PlayArea.css';

const playArea = (props) => {
   return(
      <div className="PlayArea">
         <Board boardState = {props.boardState} handleClick={props.handleClick} clicked={props.clicked} />
         <SideMenu />
      </div>
   );
}

export default playArea;