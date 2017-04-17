import './track-list.scss'

import React from 'react'
import uuid from 'uuid';
import LikeTrack from '../likeTrack/LikeTrack'
import {connect} from 'react-redux';


function TrackList(props) {


  let trackList;
  const genre = props.genre;
  const page = props.page;
  let onPlyList;


  function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  function trackCradMaker(track) {

    if (props.tracks.length > 0) {

      let trackImg = track.artwork_url ? `url(${track.artwork_url.replace('large', 't300x300')})` : '';
      let trackplylist = props.playListData.find((plylist) => plylist.tracks.find((plyListTrack) => plyListTrack.id === track.id));
      onPlyList = (trackplylist) ? true : false;

      return (

        <li key={uuid()} id={track.id} className="track-container">

          <div className="track">
            <div className="img-container"
                 style={{'backgroundImage': trackImg}}
                 onClick={() => {
                   props.handelsongclick(track)
                 }}
            />
            <p title={track.title}>
              {props.trackTitleSlicer(track.title, 37)}
            </p>
            <div className="track-footer">
              <div className="track-time">
                <span className="fa fa-clock-o" aria-hidden="true"/>
                <p>{msToTime(track.duration)}</p>
              </div>
              <LikeTrack
                page={page}
                trackTitleSlicer={ props.trackTitleSlicer }
                trackData={track}
                onPlyList={onPlyList}
              />
            </div>
          </div>
        </li>
      )
    }
    else {
      return <p>empty</p>
    }
  }

  function gridHoldPlacer(length) {
    let arr = [];
    if (page === 'explore') {
      if (length < 16) {
        const num = 16 - length;
        for (let i = 0; i < num; i++) {
          arr.push(1)
        }

        return arr;
      }
    }
    else {
      return arr;
    }
  }


  trackList = props.tracks;

  function handelPlyList() {
    if (trackList.length > 0) {
      return <ul className="track-list" key={uuid()}>
        {
          trackList.map((track) => trackCradMaker(track))
        }

        {gridHoldPlacer(trackList.length).map((num, i) => <li className="empty-track" key={uuid()}/>)}

      </ul>
    }
    else {
      return <ul className="track-list" key={uuid()}>
        <li className="empty-playlist-container">empty!</li>

      </ul>
    }
  }

  let exploreListTitle = (page === 'explore') ? <h3>Genre:{genre}</h3> : null;

  return (
    <div className="play-list-container" key={uuid()}>
      {exploreListTitle}
      {handelPlyList()}
    </div>

  )
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

    }
  }
}

function mapStateToProps(stateData) {

  return {
    playListData: stateData.playListData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);


