import React from 'react';
import LibrarySong from './LibrarySong';

export default function Library({ songs, setCurrentSong, audioRef, isPlaying }) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song =>
                    <LibrarySong
                        key={song.id}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        audioRef={audioRef}
                        isPlaying={isPlaying} />)}
            </div>
        </div>
    )
}