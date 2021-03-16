import React, { useState, useRef } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';
import Library from './components/Library';

export default function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const updateTime = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration })
  }

  const audioRef = useRef(null);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        audioRef={audioRef}
        currentSong={currentSong} />
      <Library isPlaying={isPlaying}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs} />
      <audio onLoadedMetadata={updateTime}
        onTimeUpdate={updateTime}
        ref={audioRef}
        src={currentSong.audio} />
    </div>
  );
}