import React, { Component } from 'react';
import './SideMenu.css';
import Timer from '../../../components/Timer/Timer';
import Modal from '../../Modal/Modal';

class SideMenu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showNewGameModal: false
      }
   }

   showModal = () => {
      this.setState({
         showNewGameModal: true
      })
   }    
   
   hideNewGameModal = () => {
      this.setState( { showNewGameModal: false } );
  }

   render() {
      return (
         <div className="SideMenu">
            [SideMenu]
   
         <Modal show={this.state.showNewGameModal} modalClosed={this.hideNewGameModal} newGame={this.props.newGame} />

            <ul>
               <li className="Timer">Time: <Timer resetTimer={this.props.resetTimer} /></li>
               <li>Moves: {this.props.moveCounter}</li>
               <li><button onClick={() => this.showModal()}>New game</button></li>
               <li><button onClick={this.props.AIHint}>AI hint</button></li>
            </ul>
         </div>
      );
   }
}

export default SideMenu;