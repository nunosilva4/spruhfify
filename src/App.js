import React from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';

export default function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}