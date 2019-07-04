import React from 'react';
import './SideMenu.css';

const sideMenu = (props) => {

   return(
      <div className="SideMenu">
         [SideMenu]

         <ul>
            <li>Timer</li>
            <li>Moves: {props.moveCounter}</li>
            <li>AI help</li>
            <li>New game</li>
         </ul>
      </div>
   );
}

export default sideMenu;