import React from 'react';
import './PlayerControls.css';

function PlayerControls({ isPlaying, setIsPlaying, skipSong }) {
    return (
        <div className='player-controls' >
            <button className='skip-btn' onClick={() => skipSong(false)}>back</button>
            <button className='play-btn' onClick={() => setIsPlaying(!isPlaying)} >{isPlaying ? 'Pause' : 'Play'}</button>
            <button className='skip-btn' onClick={() => skipSong()}>next</button>
        </div>
    )
}

export default PlayerControls
