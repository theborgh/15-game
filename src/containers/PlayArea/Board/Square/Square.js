import React from 'react';
import './Square.css';

const square = (props) => {

   return (
      <div className="Square">
         {props.id}
      </div>
   )
}

export default square;