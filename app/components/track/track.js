/**
 * Created by yaelo on 4/6/17.
 */


import React from 'react'
import uuid from 'uuid';
import LikeTrack from '../likeTrack/LikeTrack'


export default class Track extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedDropDown: false,
      inPlyList:false,
      currentPage: '',
    };
  }


  render(){

    let trackImg = track.artwork_url ? `url(${track.artwork_url.replace('large', 't300x300')})` : '';

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
            <LikeTrack page={page}
                       trackTitleSlicer = { props.trackTitleSlicer }
                       plyListData={props.plyListData}
                       trackData={track}
            />
          </div>
        </div>
      </li>
    )

  }
  }

