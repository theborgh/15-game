import React from 'react';
import './SideMenu.css';

const sideMenu = () => {
   return(
      <div className="SideMenu">
         [SideMenu]

         <ul>
            <li>Timer</li>
            <li>Move counter</li>
            <li>AI help</li>
            <li>My account</li>
            <li>New game</li>
         </ul>
      </div>
   );
}

export default sideMenu;