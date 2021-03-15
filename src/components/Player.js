import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Player() {
    return (
        <div className="player">
            <div className="time-controll">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-controll">

            </div>
        </div>
    )
}