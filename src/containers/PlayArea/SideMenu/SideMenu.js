import React from 'react';
import './SideMenu.css';
import Timer from '../../../components/Timer/Timer';

const sideMenu = (props) => {

   return(
      <div className="SideMenu">
         [SideMenu]

         <ul>
            <li className="Timer">Time: <Timer resetTimer={props.resetTimer} /></li>
            <li>Moves: {props.moveCounter}</li>
            <li><button onClick={props.newGame}>New game</button></li>
            <li>AI help</li>
         </ul>
      </div>
   );
}

export default sideMenu;