
import './explore.scss'

import React from 'react';
import MDSpinner from "react-md-spinner";
import TrackList from '../trackList/TrackList'
import CategoryList from '../categoryList/CategoryList'


export default class Explore extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      trackLoading: 'loading',
      offset: 0,
      limit: 15,
      page: 'explore',
      mode:null
    };
  }

  //pagination
  prevPage() {
    this.setState({
      offset: this.state.offset - this.state.limit
    });
  }

  nextPage() {
    this.setState({
      offset: this.state.offset + this.state.limit
    });
  }

  //get tracks from internet
  GetXhr() {

    let limit = this.state.limit;
    let offset = this.state.offset;
    const genre = this.props.match.params.genre;

    const searchParams = new URLSearchParams(this.props.location.search);
    const searchTarget = searchParams.get('search') ? 'q' : 'tags';

    if(searchTarget === 'q'){
      this.setState({mode: 'search'});
    }

    if(searchTarget === 'tags') {
      this.setState({mode: 'genres'});
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&app&limit=${limit}&offset=${offset}&${searchTarget}=${genre}`);
    xhr.addEventListener('load', () => {

      this.setState({tracks: JSON.parse(xhr.responseText), trackLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {

      this.setState({trackLoading: 'error'});
    });
    xhr.send();

  }

  //react framework functions

  componentDidMount() {
    this.GetXhr();

  }

  componentDidUpdate(prevProps, prevState) {

    const prevGenre = prevProps.match.params.genre;
    const targetGenre = this.props.match.params.genre;

    if (prevGenre !== targetGenre && prevState.offset === this.state.offset) {

      this.setState({offset: 0,
        trackLoading:'loading'
      } ,() => {
        this.GetXhr();
      })
    }

    if(prevState.offset !== this.state.offset && prevGenre === targetGenre){

      this.GetXhr();
    }
  }

  render() {



    switch (this.state.trackLoading) {
      case 'loading':
        return (
          <div className="explore-container">
            <CategoryList/>
            <div className="spinner-wrapper">
              <MDSpinner size={80} duration={2000} singleColor="#03a9f4"/>
            </div>
          </div>
        );

      case 'error':
        return <div>Error!</div>;

      case 'loaded':
        let pagination;
        if(this.state.tracks < 15 || this.state.tracks === undefined){
          pagination =  null;
        }
        else {
          let preBtnClass;
          if(this.state.offset === 0){
            preBtnClass = '';
          }
          else {
            preBtnClass = "next-btn"
          }

          pagination =  <div className="pagination">
            <button
              className={preBtnClass}
              onClick={()=>{ this.prevPage() }}
                    disabled={this.state.offset === 0}>prev
            </button>
            <span className="page-num">page {this.state.offset/15 + 1}</span>
            <button className="next-btn" onClick={ ()=>{ this.nextPage() }}>next</button>
          </div>;
        }


        return (

          <div className="explore-container">
            <CategoryList/>
            <div className="over-flow-explore">
              <div className="explore">
                <TrackList tracks={this.state.tracks}
                           genre={this.props.match.params.genre}
                           page={this.state.page}
                           mode={this.state.mode}
                           trackTitleSlicer = { this.props.trackTitleSlicer }

                />
                {pagination}
              </div>
            </div>
          </div>
        )
    }
  }
}
