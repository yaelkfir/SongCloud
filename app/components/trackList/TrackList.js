import './track-list.scss'

import React from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux';
import Track from '../track/Track'

function TrackList(props) {
//
// console.info(this.refs);
  let trackList;
  const genre = props.genre;
  const page = props.page;
  // let onPlyList;

  function trackCradMaker(track) {

    if (props.tracks.length > 0) {

      return (
        <Track
          key={uuid()}
          track={track}
          page={page}
          trackTitleSlicer={ props.trackTitleSlicer }
        />
      )
    }

    else {
      return <p>empty</p>
    }
  }

  // function gridHoldPlacer(length) {
  //   let arr = [];
  //   if (page === 'explore') {
  //     if (length < 16) {
  //       const num = 16 - length;
  //       for (let i = 0; i < num; i++) {
  //         arr.push(1)
  //       }
  //
  //       return arr;
  //     }
  //   }
  //   else {
  //     return arr;
  //   }
  // }


  trackList = props.tracks;

  function handelPlyList() {
    if (trackList.length > 0) {
      return <ul className="track-list" key={uuid()}>
        {
          trackList.map((track) => trackCradMaker(track))
        }

        {/*{gridHoldPlacer(trackList.length).map((num, i) => <li className="empty-track" key={uuid()}/>)}*/}

      </ul>
    }
    else {
      if(props.mode !== 'genres' && page === 'explore'){
        return <div className='empty-search'>
          <p>No songs were found for your search</p>
        </div>
      }
      else {
        return <ul className="track-list" key={uuid()}>
          <li className="empty-playlist-container">empty!</li>

        </ul>
      }

    }
  }

  let exploreSreachOrGenres = (props.mode === 'genres')?'Genre':'search';
  let exploreListTitle = (page === 'explore') ? <h3>{exploreSreachOrGenres}:{genre}</h3> : null;

  return (
    <div className="play-list-container" key={uuid()}>
      {exploreListTitle}
      {handelPlyList()}
    </div>

  )
}


function mapStateToProps(stateData) {

  return {
    playListData: stateData.playListData,
    currentTrack: stateData.currentTrack,
  }
}

export default connect(mapStateToProps)(TrackList);


