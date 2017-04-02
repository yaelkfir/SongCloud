import React from 'react'

export default class LikeTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trackLiked: false,
      playList: 'none'
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

  render() {

    if (!this.state.trackLiked) {
      return <span className="fa fa-heart-o" aria-hidden="true" onClick={ () => this.click() }/>
    }
    else {
      return <span className="fa fa-heart" aria-hidden="true" onClick={ () => this.click() }/>
    }
  }
}
