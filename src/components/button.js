import React from 'react';
import UIfx from 'uifx';


class Button extends React.Component {

  playAudio(filepath) {
    this.props.playAudio(filepath);
  }

  render() {
    return(
     <button id={`${this.props.name}-button`} onClick={() => this.props.sound.play()}>{this.props.name}</button>
    )
  }
}

export default Button;