import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
   constructor(props) {
     super(props);
     this.state = {
        seconds: 0
      };
   }
 
   componentDidMount() {
     this.timerID = setInterval(
       () => this.tick(this.state.seconds),
       1000
     );
   }
 
   componentWillUnmount() {
     clearInterval(this.timerID);
   }
 
   tick(oldtime) {
     this.setState({
       seconds: oldtime + 1
     });

     if (this.props.resetTimer) {
      this.setState({
        seconds: 0
      })
     }
   }
 
   render() {
      let h = Math.floor(this.state.seconds / 3600);
      let m = Math.floor(this.state.seconds % 3600 / 60);
      let s = Math.floor(this.state.seconds % 3600 % 60);

      let displayH = h > 0 ? h+":" : "";
      let displayM = h > 0 && m < 10 ? 
                     "0"+m+":" : 
                     m > 0 ? 
                        m+":" : 
                        "";
      let displayS = this.state.seconds >= 60 && s < 10 ? "0"+s : s;

     return (
       <div className="Timer">{displayH}{displayM}{displayS}</div>
     );
   }
 }

 export default Timer;