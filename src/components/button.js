import React from 'react';

class Button extends React.Component {

  playAudio(filepath) {
    
  }

  render() {
    return(
     <button id={`${this.props.name}-button`} onClick={() => this.playAudio(filepath)}>{this.props.name}</button>
    )
  }
}

export default Button;