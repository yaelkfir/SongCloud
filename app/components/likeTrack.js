import React from 'react'
// import TrackDrop from './TrackDrop'

export default class LikeTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackLiked: false,
      playList: 'none',

    }
  }

  click() {

    if (this.state.trackLiked) {

      this.setState({trackLiked: false});
    }

    if (!this.state.trackLiked) {

      this.setState({trackLiked: true});
    }

  }



trackTitleSlicer(str, num) {
    if (str.length > num) {
      return str.slice(0, num -3) + '...'
    }
    else {
      return str;
    }
  }

  render() {

    const electro = 'Electro Feel';
    const morningSunshine = 'Morning Sunshine';
    const hopHip = 'hop Hip';

    if (!this.state.trackLiked) {

      return (
        <div className="drop-down-container">
          <span className="fa fa-heart-o" aria-hidden="true" onClick={ () => this.click() }/>
        </div>
      )
    }
    else {
      console.info(this.trackTitleSlicer(morningSunshine,10));
      return (

        <div className="drop-down-container">
          <span className="fa fa-heart" aria-hidden="true" onClick={ () => this.click() }/>
          <div className='track-drop-list'>
            <h4>add to playlist</h4>
            <button>create playlist +</button>
            <ul>
              <li>

                <label htmlFor={electro} className="checkbox">{this.trackTitleSlicer(electro,14)}
                  <input type="checkbox" name="plyList" value={electro} id={electro}/>
                  <span className="indicator"/>
                </label>

              </li>
              <li>
                <label htmlFor={hopHip} className="checkbox">{this.trackTitleSlicer(hopHip,14)}
                  <input type="checkbox" name="plyList" value={hopHip} id={hopHip}/>
                  <span className="indicator"/>
                </label>
              </li>
              <li>
                <label htmlFor={morningSunshine} className="checkbox">{this.trackTitleSlicer(morningSunshine,14)}
                  <input type="checkbox" name="plyList" value={morningSunshine} id={morningSunshine}/>
                  <span className="indicator"/>
                </label>
              </li>
            </ul>
          </div>
        </div>

    )
    }
    }
    }
