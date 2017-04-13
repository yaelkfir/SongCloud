import './player.scss'

import React from 'react'
import { connect } from 'react-redux';

function Player(props) {

  function trackTitleSlicer(title, num) {
    if (title.length > num + 1) {
      return title.slice(0, num) + '...'
    }
    else {
      return title;
    }
  }

  let trackImg = props.currentTrack.artwork_url ? props.currentTrack.artwork_url.replace('large','t300x300') : '';
  const trackUrl = `${props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
  const trackTitel =props.currentTrack.title ? trackTitleSlicer(props.currentTrack.title, 50) : 'song';

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

function mapStateToProps(stateData) {
  console.info(stateData);
  return {
    currentTrack: stateData.currentTrack,
    playerVisible: stateData.playerVisible
  }
}

export default connect(mapStateToProps)(Player);


/*
 function mapStateToProps(store) {
 return {
 playerVisible: store.playerVisible,
 currentTrack: store.currentTrack
 }
 }

 export default connect(mapStateToProps)(Player);
 (sticky at the bottom)
 - Song thumbnail
 - Song name
 - Audio player
 */
