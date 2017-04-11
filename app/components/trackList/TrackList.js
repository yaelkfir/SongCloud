import './track-list.scss'

import React from 'react'
import uuid from 'uuid';
import LikeTrack from '../likeTrack/LikeTrack'


export default function TrackList(props) {


  let trackList;
  const genre = props.genre;
  const page= props.page;
  let onPlyList;


  function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  function trackCradMaker(track){

    let trackImg = track.artwork_url ? `url(${track.artwork_url.replace('large', 't300x300')})` : '';
    let trackplylist = props.plyListData.find((plylist) => plylist.tracks.find((plyListTrack) => plyListTrack.id === track.id));
    onPlyList =  (trackplylist)? true : false;

    return(

      <li key={uuid()} id={track.id} className="track-container">

        <div className="track">
          <div className="img-container"
               style={{'backgroundImage':trackImg}}
               onClick={()=> {return props.updateCurrentTrack(track)}}
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
              addTrackToPlyList={props.addTrackToPlyList}
              trackTitleSlicer = { props.trackTitleSlicer }
              plyListData={props.plyListData}
              trackData={track}
              onPlyList = {onPlyList} />
          </div>
        </div>
      </li>
    )

  }

  function gridHoldPlacer(length) {
    if (length < 16) {
      const num = 16 - length;


      let arr = [];

      for (let i = 0; i < num; i++) {
        arr.push(1)
      }

      return arr;
    }
  }



    trackList = props.tracks;


  let exploreListTitle = (page === 'explore') ? <h3>Genre:{genre}</h3> : null;
    return (


      <div className="play-list-container" key={uuid()}>
        {exploreListTitle}
        <ul className="track-list">
          {
            trackList.map((track) => trackCradMaker(track))
          }

          {gridHoldPlacer(trackList.length).map((num, i) => <li className="empty-track" key={'num' + i}/>)}

        </ul>
      </div>

    )



}
/*

 console.info('on playlist',track, track.id, plyListTrack.id );
 return likeTrack = <LikeTrack
 page={page}
 addTrackToPlyList={props.addTrackToPlyList}
 trackTitleSlicer = { props.trackTitleSlicer }
 plyListData={props.plyListData}
 trackData={track}
 onPlyList = { true } /> ;
 }
 else {

 console.info('not on playlist',track);

 likeTrack = <LikeTrack

 page={page}
 addTrackToPlyList={props.addTrackToPlyList}
 trackTitleSlicer = { props.trackTitleSlicer }
 plyListData={props.plyListData}
 trackData={track}
 onPlyList = { false } /> ;
 }
 }
 */
