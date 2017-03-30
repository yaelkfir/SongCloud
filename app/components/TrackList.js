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


  return (


    <ul className="track-container song-list">
      {props.tracks.map((track, i) => {

        return <li key={[i]} id={track.id} className="song">
          <div className="track">
            <div className="song-img-container">
              <img className="song-img" src={track.artwork_url} alt=""/>
            </div>
            <p>
              {track.title.slice(0, 30) + '...'}
            </p>
          </div>
        </li>
      })
      }
    </ul>
  )
}
