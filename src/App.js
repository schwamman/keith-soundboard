import React from 'react';
import './App.css';
import Header from './components/header';
import Soundboard from './components/soundboard';
import audio from './data/audio';
import UIfx from 'uifx';

const audioFile = new UIfx({ 
  asset: "https://keith-audio.s3.us-east-2.amazonaws.com/im-the-f'ing-teacher.mp3", 
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioFiles: audio,
      
    }
  }

  playAudio = (filepath) => {
    // const audio = new UIfx({asset: filepath});
    audioFile.play();
  }

  render() {
    return (
      <>
      <Header />
      <Soundboard 
        audioFiles={this.state.audioFiles}
        playAudio={this.playAudio}
      />
      </>
    );
  }
}

export default App;
