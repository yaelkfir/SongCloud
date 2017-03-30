/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react';

import TrackList from './TrackList'

export default class Explore extends React.Component {
  constructor() {
    super();

    this.state = {
      tracks: [],
      trackLoading: 'loading'

    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://create-bootcamp-songcloud-server.now.sh/tracks?genre=trance');
    xhr.addEventListener('load', () => {
      this.setState({ tracks: JSON.parse(xhr.responseText), trackLoading: 'loaded' });
    });
    xhr.addEventListener('error', () => {
      this.setState({ trackLoading: 'error' });
    });
    xhr.send();
  }


  render(){

    return (

      <div className="explore">

        <ul className="category-list">
          <li><a href="#" className="selected-category">category1</a></li>
          <li><a href="#">category2</a></li>
          <li><a href="">category3</a></li>
        </ul>

        <TrackList tracks={this.state.tracks}/>

        <div>
          <span>page number: 1</span>
        </div>
        <div>
          <button>before</button>
          <button>next</button>
        </div>
      </div>
    )
  }
}

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
