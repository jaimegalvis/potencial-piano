import React from 'react';
import './PlayerControls.css';

function PlayerControls() {
    return (
        <div className='player-controls' >
            <button className='skip-btn' >back</button>
            <button className='play-btn' >play</button>
            <button className='skip-btn' >next</button>
        </div>
    )
}

export default PlayerControls
