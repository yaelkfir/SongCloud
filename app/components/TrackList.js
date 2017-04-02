/**
 * Created by yaelo on 3/30/17.
 */

import React from 'react'
import LikeTrack from './likeTrack'

export default function TrackList(props) {

  const trackList = props.tracks;

  function trackTitleSlicer(title) {
    if (title.length > 38) {
      return title.slice(0, 37) + '...'
    }
    else {
      return title;
    }
  }

  function msToTime(duration) {
    const seconds = parseInt((duration / 1000) % 60);
    const minutes = parseInt((duration / (1000 * 60)) % 60);

    return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
  }

  function gridHoldPlacer(length) {
    if (length < 15) {
      const num = 15 - length;


      let arr = [];

      for (let i = 0; i < num; i++) {
        arr.push(1)
      }

      return arr;
    }
  }

  return (

    <div className="list-container">
      <h3>
        Genre: Hip hop rap
      </h3>
      <ul className="track-list">
        {
          trackList.map((track, i) => <li key={i} id={track.id} className="track-container">

            <div className="track">
              <div className="img-container" style={{'backgroundImage':`url(${track.artwork_url.replace('large','t300x300')})`}}/>
              <p title={track.title}>
                {trackTitleSlicer(track.title)}
              </p>
              <div className="track-footer">
                <div className="track-time">
                  <span className="fa fa-clock-o" aria-hidden="true"/>
                  <p>{msToTime(track.duration)}</p>
                </div>
                <LikeTrack/>
              </div>
            </div>
          </li>)
        }

        {gridHoldPlacer(trackList.length).map((num, i) => <li className="empty-track" key={'num' + i}/>)}

      </ul>
    </div>

  )
}
