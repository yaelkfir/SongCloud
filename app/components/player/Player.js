import './player.scss'

import React from 'react'

export default function Player(props) {

  function trackTitleSlicer(title, num) {
    if (title.length > num + 1) {
      return title.slice(0, num) + '...'
    }
    else {
      return title;
    }
  }

  let trackImg = props.track.artwork_url ? props.track.artwork_url.replace('large','t300x300') : '';
  const trackUrl = `${props.track.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  const trackTitel = props.track.title ? trackTitleSlicer(props.track.title, 50) : 'song';

  if(props.playerVisible){

    return(
      <div className="player">
        <div className="player-track-details">
          <img src={trackImg} alt="song thumbnail"/>
          <p>{trackTitel}</p>
        </div>
        <div className="player-controls">
          <audio controls="controls"
                 src={ trackUrl }
                 autoPlay/>
        </div>
      </div>
    )
  }
  else { return <div className="player hidden"/> }

}

/*
 (sticky at the bottom)
 - Song thumbnail
 - Song name
 - Audio player
 */
