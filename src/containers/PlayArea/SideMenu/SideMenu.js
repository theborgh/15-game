import React from 'react';
import './SideMenu.css';
import Timer from '../../../components/Timer/Timer';

const sideMenu = (props) => {

   return(
      <div className="SideMenu">
         [SideMenu]

         <ul>
            <li>Timer: <Timer /></li>
            <li>Moves: {props.moveCounter}</li>
            <li>AI help</li>
            <li>New game</li>
         </ul>
      </div>
   );
}

export default sideMenu;