import React, { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';

export default function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
    </div>
  );
}