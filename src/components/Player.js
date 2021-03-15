import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

export default function Player({ currentSong, isPlaying, setIsPlaying }) {

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    const audioRef = useRef(null);

    const playSong = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const dragInput = (event) => {
        audioRef.current.currentTime = event.target.value;
        setSongInfo({...songInfo, currentTime: event.target.value})
    }

    const updateTime = (event) => {
        const current = event.target.currentTime;
        const duration = event.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration })
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} 
                max={songInfo.duration}
                onChange={dragInput} 
                value={songInfo.currentTime} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSong} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
            <audio onLoadedMetadata={updateTime}
                onTimeUpdate={updateTime}
                ref={audioRef}
                src={currentSong.audio} />
        </div>
    )
}