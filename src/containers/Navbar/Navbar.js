import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const navbar = (props) => {
   return (
      <div className="Navbar">
         <Link to="/">Home</Link>
         <Link className="NavLink" to="/rules">Rules & General Hints</Link>
         {
            props.location.pathname === "/" ?
               <div>
                  <Link className="NavLink" to="/profile" >Profile</Link> | 
                  <Link className="NavLink" to="/signin" >Sign out</Link>
               </div> :
               null
         }

      </div>
   );
}

export default withRouter(navbar);