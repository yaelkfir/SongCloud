/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react'

export default function Player() {

return(
  <div className="explore-footer">
    <div className="player-track-details">
      <img src="http://placehold.it/50x50" alt="song thumbnail"/>
      <p>Song name</p>
    </div>
<div className="player-controls">
  <audio controls="controls">
    <source src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" type="audio/ogg"/>
  </audio>
</div>
  </div>
)
}

/*
 (sticky at the bottom)
 - Song thumbnail
 - Song name
 - Audio player
 */
