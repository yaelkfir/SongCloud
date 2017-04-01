/**
 * Created by yaelo on 3/30/17.
 */

import React from 'react'

export default function TrackList(props) {


  /*
   <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
   <li><NavLink to="/about" activeClassName="selected">About us</NavLink></li>
   <li><NavLink to="/asldfjsdf" activeClassName="selected">To infinity, and beyond! 🚀</NavLink></li>
   */
  // console.info('work!',props.tracks[1]);

  //make 16 empty divs with no hight
  const tracklist = props.tracks;

  function trackTitleSlicer(title) {
    if (title.length > 38) {
      return title.slice(0, 37) + '...'
    }
    else {
      return title;
    }
  }

  function trackMaker(track, i) {
    console.info(track);
    return <li key={i} id={track.id} className="track-container">

      <div className="track">
        <div className="img-container">
          <img className="song-img" src={track.artwork_url} alt=""/>
        </div>
        <p title={track.title}>
          {trackTitleSlicer(track.title)}
        </p>
        <div className="track-footer">
          <div className="track-time">
            <span className="fa fa-clock-o" aria-hidden="true"/>
            <p>3:57</p>
          </div>

          <span className="fa fa-heart-o" aria-hidden="true"/>
        </div>
      </div>
    </li>;
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
          tracklist.map((track, i) => trackMaker(track, i))
        }
        {gridHoldPlacer(tracklist.length).map((num, i) => <li className="empty-track" key={'num' + i}/>)}
        {/*<li className="track-container-test"/>*/}
        {/*<li className="track-container-test"/>*/}
        {/*<li className="track-container-test"/>*/}
        {/*<li className="track-container-test"/>*/}
        {/*<li className="track-container-test"/>*/}
        {/*<li className="track-container-test"/>*/}

      </ul>
    </div>

  )
}
