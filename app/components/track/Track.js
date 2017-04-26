import React from 'react'

import {connect} from 'react-redux';
import LikeTrack from '../likeTrack/LikeTrack'


class Track extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: null,//true,false
      // playingMode: 'none'
    };
  }

  msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }


  componentDidMount() {

    if (this.props.track.id === this.props.currentTrack.id) {

      this.setState({playing: true});
    }
    else {
      this.setState({playing: false});
    }
  }

  setPlaying(e) {
console.info('track', e.target);
    if(this.props.audioPlayerMode === 'none'){
      this.props.setAudioMode('play');
    }

    if(this.props.audioPlayerMode === 'play') {
      this.props.setAudioMode('pause');
    }

    if(this.props.audioPlayerMode === 'pause') {
      this.props.setAudioMode('play');
    }
  }

  render() {

    // console.info('playingMode',this.state);


    let trackImg = this.props.track.artwork_url ? `url(${this.props.track.artwork_url.replace('large', 't300x300')})` : 'url(../assets/img-placeholder-track.png)';
    let trackplylist = this.props.playListData.find((plylist) => plylist.tracks.find((plyListTrack) => plyListTrack.id === this.props.track.id));
    let onPlyList = (trackplylist) ? true : false;
    let imgClass;
    if (this.state.playing === true) {
      if (this.props.audioPlayerMode === 'play') {
        imgClass = "img-container playing"
      }
      if (this.props.audioPlayerMode === 'pause') {
        imgClass = "img-container pause"
      }
    }

    else {
      imgClass = "img-container";
    }
    return (
      <li id={this.props.track.id} className="track-container">

        <div className="track">
          <div className={imgClass}
               data={this.props.track.id + 'img'}
               style={{'backgroundImage': trackImg}}
               onClick={(e) => {
                 this.props.handelsongclick(this.props.track);
                 this.setPlaying(e);
               }}
          />
          <p title={this.props.track.title}>
            {this.props.trackTitleSlicer(this.props.track.title, 37)}
          </p>
          <div className="track-footer">
            <div className="track-time">
              <span className="fa fa-clock-o" aria-hidden="true"/>
              <p>{this.msToTime(this.props.track.duration)}</p>
            </div>
            <LikeTrack
              page={this.props.page}
              trackTitleSlicer={this.props.trackTitleSlicer}
              trackData={this.props.track}
              onPlyList={onPlyList}
            />
          </div>
        </div>
      </li>
    )
  }
}


function mapDispatchToProps(dispatch) {

  return {
    handelsongclick(track){
      dispatch({
        type: 'UPDATE_CURRENT_TRACK',
        track: track
      });

      dispatch({
        type: 'UPDATE_PLAYER_VISIBLE',
      })
    },
    setAudioMode(mode){
      console.info('mode',mode);
      dispatch({
        type: 'SET_AUDIO_PLAYER_MODE',
        mode: mode
      })
    }
  }
}


function mapStateToProps(stateData) {

  return {
    playListData: stateData.playListData,
    currentTrack: stateData.currentTrack,
    audioPlayerMode: stateData.audioPlayerMode

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Track);
