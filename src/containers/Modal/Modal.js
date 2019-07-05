import React, { Component } from 'react';
import './Modal.css';
import ModalBackdrop from './ModalBackdrop/ModalBackdrop';

class Modal extends Component {

   render() {
      let modal = null;
      if (this.props.show) {
         modal = <div>
            <ModalBackdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div className="Modal" style={{
               transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: this.props.show ? '1' : '0'
            }}>
               Modal content here
         </div>
         </div>;

      }
      return (modal);
   }
}

export default Modal;