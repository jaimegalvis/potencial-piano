import React from 'react'
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import PlayerControls from '../PlayerControls/PlayerControls'
import './Player.css'

function Player({song}) {
    return (
        <div className='player'>
            <audio></audio>
            <h3>PLAYING NOW</h3>
            <p><strong>{song.title}</strong> by {song.artist}</p>
            <PlayerDetails song={song} />
            <PlayerControls />
        </div>
    )
}

export default Player;
