import React, { Component } from 'react';
import './Modal.css';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';

class Modal extends Component {

   render() {
      let modal = null;
      if (this.props.show) {
         modal = <div>
            <ModalBackdrop show={this.props.show} clicked={this.props.modalBackdropClicked} />
            <div className="Modal" style={{
               transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: this.props.show ? '1' : '0'
            }}>
               <ul>
                  <button onClick={() => this.props.newGame(5)} >Very easy (solvable in 5 moves)</button><br />
                  <button onClick={() => this.props.newGame(10)}>Easy (solvable in 10 moves)</button><br />
                  <button onClick={() => this.props.newGame(15)}>Normal (solvable in 15 moves)</button><br />
                  <button onClick={() => this.props.newGame(20)}>Expert (solvable in 20 moves)</button><br />
                  <button onClick={() => this.props.newGame(50)}>Master (solvable in 50 moves)</button><br />
                  <li>AI hints: [select]</li>
                  <li>Click the background to cancel</li>
               </ul>
         </div>
         </div>;

      }
      return (modal);
   }
}

export default Modal;