import React from 'react';
import Button from './button';

class Soundboard extends React.Component {
  render() {
    return(
      <>
        <div id='soundboard'>
          {
            this.props.audioFiles.map(audio => (
              <Button 
                name={audio.name}
                filepath={audio.filepath}
                playAudio={this.props.playAudio}
              />
            ))
          }

        </div>
      </>
    )
  }
}

export default Soundboard;