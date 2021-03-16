import React from 'react';

export default function LibrarySong({ song, setCurrentSong, audioRef, isPlaying }) {

    const selectSong = () => {
        setCurrentSong(song);
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => audioRef.current.play())
            }
        }
    }

    return (
        <div onClick={selectSong} className="library-song">
            <img src={song.cover} alt="song-cover" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}