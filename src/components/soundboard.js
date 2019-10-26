import React from 'react';
import Button from './button';
import UIfx from 'uifx';

class Soundboard extends React.Component {
  render() {
    return(
      <>
        <div id='soundboard'>
          {
            this.props.audioFiles.map(audio => (
              <Button 
                name={audio.name}
                sound={new UIfx(audio.filepath)}
                //playAudio={this.props.playAudio}
              />
            ))
          }

        </div>
      </>
    )
  }
}

export default Soundboard;