import React from 'react';
import Board from './Board/Board';
import SideMenu from './SideMenu/SideMenu';
import './PlayArea.css';

const playArea = () => {
   return(
      <div className="PlayArea">
         <Board />
         <SideMenu />
      </div>
   );
}

export default playArea;