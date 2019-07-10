import React from 'react';
import './Navbar.css';

const navbar = (props) => {
   return (
      <div className="Navbar">
         <div className="Navlink">Home</div>
         <div className="Navlink">Rules & General Hints</div>
         <div onClick={() => props.onRouteChange("signin")} className="Navlink">{props.route === 'home' ? "Sign out" : null}</div>
         
      </div>
   );
}

export default navbar;