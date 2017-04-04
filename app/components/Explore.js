/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react';

import MDSpinner from "react-md-spinner";
import TrackList from './TrackList'
import CategoryList from './CategoryList'
// import Pagination from './Pagination'
// import Player from './Player'

export default class Explore extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      tracks: [],
      trackLoading: 'loading',
      selectedTrack: {},
      offset: 0,
      limit: 15
    };

    console.info('explore props',this.props);
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

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&app&limit=${limit}&offset=${offset}&tags=${genre}`);
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

      this.setState({offset: 0} ,() => {
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
        return (
          <div className="explore-container">
            <CategoryList/>
            <div className="over-flow-explore">
              <div className="explore">
                <TrackList tracks={this.state.tracks} genre={this.props.match.params.genre} updateCurrentTrack={ this.props.updateCurrentTrack }/>
                <div className="pagination">
                  <button onClick={()=>{ this.prevPage() }}
                          disabled={this.state.offset === 0}>prev
                  </button>
                  <span className="page-num">page {this.state.offset/15 + 1}</span>
                  <button className="next-btn" onClick={ ()=>{ this.nextPage() }}>next</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }
}

/*
 1. We get the genre for the `SongsComponent` in `this.props.match.params.genre`.
 XHR to `https://create-bootcamp-songcloud-server.now.sh/tracks?genre=${genre}` (in componentDidMount)
 this.setState{songs: ...}
 */

/*
 render() {
 switch (this.state.loading) {
 case 'loading':
 return (
 <div className="midMe">
 <MDSpinner size={100} duration={2000} singleColor="#03a9f4"/>
 </div>
 );
 case 'error':
 return <div>Error!</div>;
 case 'loaded':
 }
 return (
 <div className="explore-wrap">
 <div className="genres-section">
 <p>Genres:</p>
 <ul className="genere-style">
 <li><a href="#">all-music</a></li>
 <li><a href="#">Jazz</a></li>
 <li><a href="#">Classic</a></li>
 <li><a href="#">Rock</a></li>
 <li><a href="#">Metal</a></li>
 <li><a href="#">ballads</a></li>
 <li><a href="#">Shity Music</a></li>
 </ul>
 </div>
 <p>Genre:</p>
 <div>
 <div className="song-cards-wrapper">
 {this.state.songs.map((song, i) => <div key={song.id} className="song-card">
 <SongCard props={this.state.songs[i]}/>
 </div>
 )}
 </div>
 </div>
 <div className="pager">
 <button className="page-btn">Prev</button>
 <p>page 1</p>
 <button className="page-btn">Next</button>
 </div>
 <Player props={this.state.songs[6]}/>
 </div>
 );
 }
 }
 ;
 */

/*
 :
 Object
 artwork_url
 :
 "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg"
 attachments_uri
 :
 "https://api.soundcloud.com/tracks/250711755/attachments"
 bpm
 :
 null
 comment_count
 :
 9462
 commentable
 :
 true
 created_at
 :
 "2016/03/07 20:25:55 +0000"
 description
 :
 "Check out the new merch! merch.illenium.com/↵Follow me on tour! illenium.com/#tourSpotify: https://open.spotify.com/track/1yNbAK2NOZkJO0M1E7KpL6↵↵ILLENIUM:↵@illeniumofficial | facebook.com/illenium | twitter.com/illeniummusic↵↵Huge thank you to @thechainsmokers for letting me remix this amazing tune!! Hope to see you guys on the road!!↵↵THE CHAINSMOKERS↵@thechainsmokers | facebook.com/thechainsmokers | twitter.com/thechainsmokers↵↵PREMIERE - http://thissongissick.com/#sthash.V4IvZisw.dpbs"
 download_count
 :
 0
 download_url
 :
 null
 downloadable
 :
 false
 duration
 :
 219082
 embeddable_by
 :
 "all"
 favoritings_count
 :
 0
 genre
 :
 "Dance & EDM"
 id
 :
 250711755
 isrc
 :
 null
 key_signature
 :
 ""
 kind
 :
 "track"
 label_id
 :
 null
 label_name
 :
 null
 last_modified
 :
 "2017/03/29 09:14:33 +0000"
 license
 :
 "all-rights-reserved"
 likes_count
 :
 1103991
 original_content_size
 :
 57947444
 original_format
 :
 "wav"
 permalink
 :
 "the-chainsmokers-dont-let-me-down-illenium-remix"
 permalink_url
 :
 "https://soundcloud.com/illeniumofficial/the-chainsmokers-dont-let-me-down-illenium-remix"
 playback_count
 :
 19927974
 purchase_title
 :
 "Spotify"
 purchase_url
 :
 "https://play.spotify.com/track/1yNbAK2NOZkJO0M1E7KpL6"
 release
 :
 ""
 release_day
 :
 null
 release_month
 :
 null
 release_year
 :
 null
 reposts_count
 :
 133272
 sharing
 :
 "public"
 state
 :
 "finished"
 stream_url
 :
 "https://api.soundcloud.com/tracks/250711755/stream"
 streamable
 :
 true
 tag_list
 :
 "dance Edm melodic "porter robinson" odesza dubstep Trance chill step vanic skrux "adventure club" illenium chainsmokers daya remix hipster"
 title
 :
 "The Chainsmokers - Don't Let Me Down (Illenium Remix)"
 track_type
 :
 null
 uri
 :
 "https://api.soundcloud.com/tracks/250711755"
 user
 :
 Object
 user_favorite
 :
 false
 user_id
 :
 27111815
 user_playback_count
 :
 null
 video_url
 :
 null
 waveform_url
 :
 "https://w1.sndcdn.com/jjFkf5VfwIuy_m.png"

 */
