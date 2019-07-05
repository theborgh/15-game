import React, { Component } from 'react';
import './SideMenu.css';
import Timer from '../../../components/Timer/Timer';
import Modal from '../../Modal/Modal';

class SideMenu extends Component {

   render() {
      return (
         <div className="SideMenu">
            [SideMenu]
   
         <Modal show={this.props.showModal} newGameClicked={this.props.newGameClicked} modalBackdropClicked={this.props.modalBackdropClicked} newGame={this.props.newGame} />

            <ul>
               <li className="Timer">Time: <Timer resetTimer={this.props.resetTimer} /></li>
               <li>Moves: {this.props.moveCounter}</li>
               <li><button onClick={this.props.newGameClicked}>New game</button></li>
               <li><button onClick={this.props.AIHint}>AI hint</button></li>
            </ul>
         </div>
      );
   }
}

export default SideMenu;