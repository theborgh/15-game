import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

   state = {
      clicked: false
   };

   render() {
      const cl = this.state.clicked ? 'clicked' : '';
      const classes = `Square ${cl}`;

      let square = <div className={classes} onClick={() => this.setState({clicked: true})}>
         {this.props.id}</div>;
      if (this.props.id === 0) {
         square = <div className="EmptySquare"></div>
      }

      return (square)
   }
}

export default Square;