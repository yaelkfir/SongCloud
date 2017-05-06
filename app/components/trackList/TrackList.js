import './track-list.scss'

import React from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux';
import Track from '../track/Track'

function TrackList(props) {

  const genre = props.genre;
  const page = props.page;
  let trackList = props.tracks;


  function trackCardMaker(track,trackList) {

    if (props.tracks.length > 0) {

      return (
        <Track
          key={uuid()}
          track={track}
          tracks={trackList}
          page={page}
          trackTitleSlicer={ props.trackTitleSlicer }
        />
      )
    }

    else {
      return <p>empty</p>
    }
  }

  function gridHoldPlacer(length) {

    let arr = [];


      if (length % 4 === 0) {

        return arr;
      }

      else {
        const number = length % 4;
        for (let i = 0; i < number; i++) {
          arr.push(1);
        }
        return arr
      }

  }



  function handelPlyList() {
    if (trackList.length > 0) {


      return <ul className="track-list" key={uuid()}>
        {
          trackList.map((track) => trackCardMaker(track,trackList))
        }

        {gridHoldPlacer(trackList.length).map((num, i) => <li className="empty-track" key={uuid()}/>)}

      </ul>
    }
    else {
      if (props.mode !== 'genres' && page === 'explore') {
        return <div className='empty-search'>
          <div className='fa fa-search'/>
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

  let exploreSearchOrGenres = (props.mode === 'genres') ? 'Genre' : 'search';
  let exploreListTitle = (page === 'explore') ? <h3>{exploreSearchOrGenres}:{genre}</h3> : null;


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


