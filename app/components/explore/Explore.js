import './explore.scss'

import React from 'react';
import MDSpinner from "react-md-spinner";
import TrackList from '../trackList/TrackList'
import CategoryList from '../categoryList/CategoryList'
import {connect} from 'react-redux';

class Explore extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      trackLoading: 'loading',
      params: {
        client_id: 'R05HJlT1Pq49aYbJl7VfKJ587r2blpL1',
        limit: 25,
        offset: 0,
        linked_partitioning: 1,
        app_version: 1539875955,
        app_locale: 'en'
      },
      offset: 0,
      limit: 30,
      page: 'explore',
      mode: null
    };

  }

  /*
  client_id: 'R05HJlT1Pq49aYbJl7VfKJ587r2blpL1',
limit: 25,
offset: 0,
linked_partitioning: 1,
app_version: 1539875955,
app_locale: en
   */

  componentDidMount() {
    this.GetXhr();
  }

  componentDidUpdate(prevProps, prevState) {

    const prevGenre = prevProps.match.params.genre;
    const targetGenre = this.props.match.params.genre;

    if (prevGenre !== targetGenre && prevState.offset === this.state.offset) {

      this.setState({
        offset: 0,
        trackLoading: 'loading'
      }, () => {
        this.GetXhr();
      })
    }

    if (prevState.offset !== this.state.offset && prevGenre === targetGenre) {

      this.GetXhr();
    }
  }

  //get tracks

  GetXhr() {

    let limit = this.state.limit;
    let offset = this.state.offset;
    const genre = this.props.match.params.genre;

    const searchParams = new URLSearchParams(this.props.location.search);
    const searchTarget = searchParams.get('search') ? 'q' : 'tags';

    if (searchTarget === 'q') {
      this.setState({mode: 'search'});
    }

    if (searchTarget === 'tags') {
      this.setState({mode: 'genres'});
    }
    /*
    var url = new URL("https://geo.example.org/api"),
    params = {lat:35.696233, long:139.570431}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
fetch(url).then(...)
     */
    console.log('state', this.state.params);
    console.log('props', this.props);

    const url = new URL('https://api.soundcloud.com/tracks');
    Object.keys(this.state.params).forEach(key => url.searchParams.append(key, this.state.params[key]));

    fetch(url, {
        method: 'Get', // or 'PUT'
      }).then((res)=>{
      console.log('fetch :)',  res.json().then((body)=>{
        console.log(body);
        this.setState({tracks: body, trackLoading: 'loaded'});
      }));
    });

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=R05HJlT1Pq49aYbJl7VfKJ587r2blpL1&app&limit=${limit}&offset=${offset}&app_locale=en&linked_partitioning=1`);
    xhr.addEventListener('load', () => {

      this.setState({tracks: JSON.parse(xhr.responseText), trackLoading: 'loaded'});
    });
    xhr.addEventListener('error', () => {

      this.setState({trackLoading: 'error'});
    });
    xhr.send();

  }




  //pagination

  goToPrevPage() {
    this.setState({
      offset: this.state.offset - this.state.limit
    });
  }

  goToNextPage() {

    this.setState({
      offset: this.state.offset + this.state.limit
    });
  }

  pagination() {


    const preBtnClass = (this.state.offset === 0) ? '' : 'next-btn';
    const nextBtnClass = (this.state.tracks.length < 28 || this.state.tracks === undefined) ? '' : 'next-btn';

    const paginationElm = <div className="pagination">
      <button
        className={ preBtnClass }
        onClick={() => {
          this.goToPrevPage();
        }}
        ref={(ref) => {
          this.prevBtnElm = ref;
        }}
        disabled={ this.state.offset === 0 }> prev
      </button>
      <span className="page-num">page { this.state.offset / 30 + 1 }</span>
      <button className={ nextBtnClass }
              disabled={ this.state.tracks.length < 28 }
              onClick={() => {
                this.goToNextPage();
              }
              }>next
      </button>
    </div>;

    //no search results
    if (this.state.mode === 'search' && this.state.tracks.length === 0) {
      return null;
    }

    else {

      return paginationElm;

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

        const OverFlowDivClass = (this.props.playerVisible) ? 'over-flow-explore-plus' : 'over-flow-explore';

        return (

          <div className="explore-container">
            <CategoryList/>
            <div className={OverFlowDivClass}>
              <div className="explore">
                <TrackList tracks={this.state.tracks}
                           genre={this.props.match.params.genre}
                           page={this.state.page}
                           mode={this.state.mode}
                           trackTitleSlicer={ this.props.trackTitleSlicer }

                />
                { this.pagination() }
              </div>
            </div>
          </div>
        )
    }
  }
}


function mapStateToProps(stateData) {

  return {
    playerVisible: stateData.playerVisible,
  }
}

export default connect(mapStateToProps)(Explore);
