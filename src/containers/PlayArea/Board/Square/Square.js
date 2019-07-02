import React from 'react';
import './Square.css';

const square = (props) => {
   let square = <div className="Square">
   {props.id}</div>;

   if (props.id === 0) {
      square = <div className="EmptySquare"></div>
   }

   return (square)
}

export default square;