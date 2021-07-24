import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import PlayerControls from '../PlayerControls/PlayerControls'
import './Player.css'

function Player({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const skipSong = (foward = true) => {
        if (foward) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;
                if (temp > songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;
                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            });
        }
    }

        return (
            <div className='player'>
                <audio ref={audioEl} src={songs[currentSongIndex].src} ></audio>
                <h3>PLAYING NOW</h3>
                <PlayerDetails song={songs[currentSongIndex]} />
                <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong} />
                <p><strong>Next up: </strong>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</p>
            </div>
        )
    }

    export default Player;
