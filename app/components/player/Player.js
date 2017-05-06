import './player.scss'

import React from 'react'
import {connect} from 'react-redux';


class Player extends React.Component {

  trackTitleSlicer(title, num) {
    if (title.length > num + 1) {
      return title.slice(0, num) + '...'
    }
    else {
      return title;
    }
  }

  componentDidUpdate(prevProps) {

    if (prevProps.currentTrack.id === this.props.currentTrack.id) {
      if (this.audioPlayer) {
        if (this.props.audioPlayerMode === 'none' || this.props.audioPlayerMode === 'play') {
          this.audioPlayer.play();
        } else {
          this.audioPlayer.pause();
        }
      }
    }

  }

  makeAudio(track) {
    return <audio
      ref={(ref) => this.audioPlayer = ref}
      controls="controls"
      src={ track }
      onPlay={(e) => {this.props.setAudioMode('play');}}

      onPause={(e) => this.props.setAudioMode('pause')}
      onEnded={(e)=> {

        const currentIndex = this.props.tracksToPlay.findIndex((track)=> track.id === this.props.currentTrack.id);

        if(this.props.tracksToPlay[currentIndex + 1] !== undefined) {
          this.props.handelSongClick(this.props.tracksToPlay[currentIndex + 1])
        }

      }}
      autoPlay
    />
  }
/*
 document.getElementById('audio').addEventListener("ended",function() {

 */
  render() {
    let trackImg = this.props.currentTrack.artwork_url ? this.props.currentTrack.artwork_url.replace('large', 't300x300') : '';
    const trackUrl = `${this.props.currentTrack.stream_url}?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z`;
    const trackTitel = this.props.currentTrack.title ? this.trackTitleSlicer(this.props.currentTrack.title, 50) : 'song';

    if (this.props.playerVisible) {

      return (
        <div className="player">
          <div className="player-track-details">
            <img src={trackImg} alt="song thumbnail"/>
            <p>{trackTitel}</p>
          </div>
          <div className="player-controls">
            {this.makeAudio(trackUrl)}
          </div>
        </div>
      )
    }
    else {
      return <div className="player hidden"/>
    }

  }

}

function mapStateToProps(stateData) {

  return {
    tracksToPlay: stateData.tracksToPlay,
    currentTrack: stateData.currentTrack,
    playerVisible: stateData.playerVisible,
    audioPlayerMode: stateData.audioPlayerMode
  }
}

function mapDispatchToProps(dispatch) {

  return {

    handelSongClick(track){
      dispatch({
        type: 'UPDATE_CURRENT_TRACK',
        track: track
      });

      dispatch({
        type: 'UPDATE_PLAYER_VISIBLE',
      })

    },
    setAudioMode(mode){

      dispatch({
        type: 'SET_AUDIO_PLAYER_MODE',
        mode: mode
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);

