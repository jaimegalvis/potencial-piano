import React from 'react';
import './PlayerDetails.css';

function PlayerDetails({song}) {
    return (
        <div className='player-details'>
            <div className='details-image'>
                <img src={song.image} alt='' />
            </div>
            <h3 className='details-title' >{song.title}</h3>
            <h4 className='details-artist' >{song.artist}</h4>
        </div>
    )
}

export default PlayerDetails
