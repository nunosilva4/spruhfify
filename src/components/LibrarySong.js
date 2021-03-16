import React from 'react';

export default function LibrarySong({ songs, setSongs, song, setCurrentSong, audioRef, isPlaying }) {

    const selectSong = () => {
        setCurrentSong(song);
        const newSongs = songs.map((s) => {
            if (s.id === song.id) {
                return { ...s, active: true }
            } else {
                return { ...s, active: false }
            }
        })
        setSongs(newSongs);
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => audioRef.current.play())
            }
        }
    }

    return (
        <div onClick={selectSong} className={`library-song ${song.active ? "selected" : ""}`}>
            <img src={song.cover} alt="song-cover" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}