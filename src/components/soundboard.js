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
              />
            ))
          }

        </div>
      </>
    )
  }
}

export default Soundboard;