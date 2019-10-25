import React from 'react';
import './App.css';
import Header from './components/header';
import Soundboard from './components/soundboard';
import audio from './data/audio';

function App() {
  constructor(props) {
    super(props);
    this.state = {
      audioFiles = audio,
    }
  }

  return (
    <>
    <Header />
    <Soundboard 
      audioFiles = {this.audioFiles}
    />
    </>
  );
}

export default App;
