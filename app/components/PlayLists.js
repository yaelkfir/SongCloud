/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react'

// import TrackList from './TrackList'
import LikeTrack from './likeTrack'

export default function Playlists() {

  return (
    <div className="playlist-page">
      <div className="side-bar">
        <button className="next-btn">add new playlist</button>
        <ul className="play-lists-list">
          <li>
            <p>the best of playlist</p>
          </li>
          <li>
            <p>second best playlist</p>
          </li>
          <li>
            <p>just a playlist</p>
          </li>
        </ul>
      </div>
      <div className="playlist-container">
        <div className="list-container">
          <div className="list-title">
            <span>super playlist</span>
            <div className="number-tracks-container">
              <span className="number-tracks">6</span>
            </div>
          </div>

          <ul className="track-list">
            <li className="track-container">
              <div className="track">
                <div className="img-container"/>
                <p>
                  trackster!
                </p>
                <div className="track-footer">
                  <div className="track-time">
                    <span className="fa fa-clock-o" aria-hidden="true"/>
                    <p>03:59</p>
                  </div>
                  <LikeTrack/>
                </div>
              </div>
            </li>
            <li className="track-container">
              <div className="track">
                <div className="img-container"/>
                <p>
                  trackster!
                </p>
                <div className="track-footer">
                  <div className="track-time">
                    <span className="fa fa-clock-o" aria-hidden="true"/>
                    <p>03:59</p>
                  </div>
                  <LikeTrack/>
                </div>
              </div>
            </li>
            <li className="track-container">
              <div className="track">
                <div className="img-container"/>
                <p>
                  trackster!
                </p>
                <div className="track-footer">
                  <div className="track-time">
                    <span className="fa fa-clock-o" aria-hidden="true"/>
                    <p>03:59</p>
                  </div>
                  <LikeTrack/>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
