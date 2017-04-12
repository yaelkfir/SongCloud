import './root.scss'

import React from 'react'
import uuid from 'uuid';

import {
  Route,
  Switch,
  Redirect
}
  from 'react-router-dom';

import Player from '../player/Player'
import PlayLists from '../playLists/PlayLists'
import Explore from '../explore/Explore'
import TopBar from '../topBar/Topbar'

export default class Root extends React.Component {

  constructor() {
    super();

    this.state = {
      currentTrack: {},
      playerVisible: false,
      plyListData: [
        {
          id: 123,
          title: 'Electro Feel',
          newPlyList: false,
          tracks: [
            {
              artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg",
              attachments_uri: "https://api.soundcloud.com/tracks/250711755/attachments",
              bpm: null,
              comment_count: 9500,
              commentable: true,
              created_at: "2016/03/07 20:25:55 +0000",
              description: "Check out the new merch! merch.illenium.com/↵Follow me on tour! illenium.com/#tourSpotify: https://open.spotify.com/track/1yNbAK2NOZkJO0M1E7KpL6↵↵ILLENIUM:↵@illeniumofficial | facebook.com/illenium | twitter.com/illeniummusic↵↵Huge thank you to @thechainsmokers for letting me remix this amazing tune!! Hope to see you guys on the road!!↵↵THE CHAINSMOKERS↵@thechainsmokers | facebook.com/thechainsmokers | twitter.com/thechainsmokers↵↵PREMIERE - http://thissongissick.com/#sthash.V4IvZisw.dpbs",
              download_count: 0,
              download_url: null,
              downloadable: false,
              duration: 219082,
              embeddable_by: "all",
              favoritings_count: 0,
              genre: "Dance & EDM",
              id: 250711755,
              isrc: null,
              key_signature: "",
              kind: "track",
              label_id: null,
              label_name: null,
              last_modified: "2017/04/04 21:38:31 +0000",
              license: "all-rights-reserved",
              likes_count: 1112098,
              monetization_model: "NOT_APPLICABLE",
              original_content_size: 57947444,
              original_format: "wav",
              permalink: "the-chainsmokers-dont-let-me-down-illenium-remix",
              permalink_url: "https://soundcloud.com/illeniumofficial/the-chainsmokers-dont-let-me-down-illenium-remix",
              playback_count: 20006810,
              policy: "ALLOW",
              purchase_title: "Spotify",
              purchase_url: "https://play.spotify.com/track/1yNbAK2NOZkJO0M1E7KpL6",
              release: "",
              release_day: null,
              release_month: null,
              release_year: null,
              reposts_count: 133780,
              sharing: "public",
              state: "finished",
              stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
              streamable: true,
              tag_list: "dance Edm melodic ",
              title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
              track_type: null,
              uri: "https://api.soundcloud.com/tracks/250711755",
              user_favorite: false,
              user_id: 27111815,
              user_playback_count: null,
              video_url: null,
              waveform_url: "https://w1.sndcdn.com/jjFkf5VfwIuy_m.png"
            },
            {

              artwork_url: "https://i1.sndcdn.com/artworks-000041124475-2lu7vg-large.jpg",
              attachments_uri: "https://api.soundcloud.com/tracks/79973942/attachments",
              bpm: null,
              comment_count: 10704,
              commentable: true,
              created_at: "2013/02/19 21:22:06 +0000",
              description: "▶ Cedric Merchandise - bit.ly/CedricEFam↵↵Buy it Now: http://smarturl.it/SummertimeCedric↵••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••↵Follow Cedric Gervais:↵http://www.cedricgervais.com/↵http://facebook.com/cedgerv↵http://twitter.com/cedricgervais↵SC: http://soundcloud.com/cedricgervais↵↵Follow Lana Del Rey:↵http://www.lanadelrey.com/↵↵Follow Spinnin' Records:↵http://www.spinninrecords.com/↵https://www.facebook.com/SpinninRecords↵↵http://www.House.NET↵•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••↵Send all demos to dropbox@house.NET to have your track featured!↵•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••↵Sounds like: Avicii, David Guetta, Calvin Harris, Nicky Romero, Afrojack, Chuckie, Skrillex, Zedd, Steve Aoki, Showtek, Kill The Noise, Porter Robinson, Dada Life, Wolfgang Gartner, Sasha, Bingo Players, R3hab, DeadMau5, Above & Beyond, John Dahlbeck, Progressive, Dance Music, EDM, Bass, Electro, Electro House, Complextro, Moombahton, OWSLA, Ultra, Armada, Dim Mak, Spinnin' Records, Anjunabeats, Big Beat, Wall Recordings and Mau5trap",
              download_count: 6,
              download_url: null,
              downloadable: false,
              duration: 414575,
              embeddable_by: "all",
              favoritings_count: 0,
              genre: "House",
              id: 79973942,
              isrc: "",
              key_signature: "",
              kind: "track",
              label_id: 10637797,
              label_name: "Spinnin Records",
              last_modified: "2017/04/03 02:12:20 +0000",
              license: "all-rights-reserved",
              likes_count: 318476,
              monetization_model: "NOT_APPLICABLE",
              original_content_size: 17168995,
              original_format: "mp3",
              permalink: "summertime-sadness-by-lana-del-cedric-gervais-remix",
              permalink_url: "https://soundcloud.com/housemusic/summertime-sadness-by-lana-del-cedric-gervais-remix",
              playback_count: 21971598,
              policy: "ALLOW",
              purchase_title: null,
              purchase_url: "https://itunes.apple.com/us/album/summertime-sadness-lana-del/id672413494?uo=4&at=11lHt7",
              release: "",
              release_day: 30,
              release_month: 1,
              release_year: 2013,
              reposts_count: 63013,
              sharing: "public",
              state: "finished",
              stream_url: "https://api.soundcloud.com/tracks/79973942/stream",
              streamable: true,
              tag_list: "House.NET ",
              Records: " House Electro Electro-House Housemusic Complextro Bass BassMusic Music Electronic Melodic MOOMBAHTON Prog-House Progressive Prog-Trance EDM Dance DubStep Trance Techno Drumstep Electro-Prog Minimal TechHouse",
              title: "Lana Del Rey - Summertime Sadness (Cedric Gervais Remix)",
              track_type: "remix",
              uri: "https://api.soundcloud.com/tracks/79973942",
              user_favorite: false,
              user_id: 5614319,
              user_playback_count: null,
              video_url: null,
              waveform_url: "https://w1.sndcdn.com/Ekkfiki0rseo_m.png"
            }
          ]
        },
        {
          id: 1234,
          title: 'hop Hip',
          newPlyList: false,
          tracks: [
            {

              artwork_url: "https://i1.sndcdn.com/artworks-000041124475-2lu7vg-large.jpg",
              attachments_uri: "https://api.soundcloud.com/tracks/79973942/attachments",
              bpm: null,
              comment_count: 10704,
              commentable: true,
              created_at: "2013/02/19 21:22:06 +0000",
              description: "▶ Cedric Merchandise - bit.ly/CedricEFam↵↵Buy it Now: http://smarturl.it/SummertimeCedric↵••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••↵Follow Cedric Gervais:↵http://www.cedricgervais.com/↵http://facebook.com/cedgerv↵http://twitter.com/cedricgervais↵SC: http://soundcloud.com/cedricgervais↵↵Follow Lana Del Rey:↵http://www.lanadelrey.com/↵↵Follow Spinnin' Records:↵http://www.spinninrecords.com/↵https://www.facebook.com/SpinninRecords↵↵http://www.House.NET↵•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••↵Send all demos to dropbox@house.NET to have your track featured!↵•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••↵Sounds like: Avicii, David Guetta, Calvin Harris, Nicky Romero, Afrojack, Chuckie, Skrillex, Zedd, Steve Aoki, Showtek, Kill The Noise, Porter Robinson, Dada Life, Wolfgang Gartner, Sasha, Bingo Players, R3hab, DeadMau5, Above & Beyond, John Dahlbeck, Progressive, Dance Music, EDM, Bass, Electro, Electro House, Complextro, Moombahton, OWSLA, Ultra, Armada, Dim Mak, Spinnin' Records, Anjunabeats, Big Beat, Wall Recordings and Mau5trap",
              download_count: 6,
              download_url: null,
              downloadable: false,
              duration: 414575,
              embeddable_by: "all",
              favoritings_count: 0,
              genre: "House",
              id: 79973942,
              isrc: "",
              key_signature: "",
              kind: "track",
              label_id: 10637797,
              label_name: "Spinnin Records",
              last_modified: "2017/04/03 02:12:20 +0000",
              license: "all-rights-reserved",
              likes_count: 318476,
              monetization_model: "NOT_APPLICABLE",
              original_content_size: 17168995,
              original_format: "mp3",
              permalink: "summertime-sadness-by-lana-del-cedric-gervais-remix",
              permalink_url: "https://soundcloud.com/housemusic/summertime-sadness-by-lana-del-cedric-gervais-remix",
              playback_count: 21971598,
              policy: "ALLOW",
              purchase_title: null,
              purchase_url: "https://itunes.apple.com/us/album/summertime-sadness-lana-del/id672413494?uo=4&at=11lHt7",
              release: "",
              release_day: 30,
              release_month: 1,
              release_year: 2013,
              reposts_count: 63013,
              sharing: "public",
              state: "finished",
              stream_url: "https://api.soundcloud.com/tracks/79973942/stream",
              streamable: true,
              tag_list: "House.NET ",
              Records: " House Electro Electro-House Housemusic Complextro Bass BassMusic Music Electronic Melodic MOOMBAHTON Prog-House Progressive Prog-Trance EDM Dance DubStep Trance Techno Drumstep Electro-Prog Minimal TechHouse",
              title: "Lana Del Rey - Summertime Sadness (Cedric Gervais Remix)",
              track_type: "remix",
              uri: "https://api.soundcloud.com/tracks/79973942",
              user_favorite: false,
              user_id: 5614319,
              user_playback_count: null,
              video_url: null,
              waveform_url: "https://w1.sndcdn.com/Ekkfiki0rseo_m.png"
            }
          ]
        },
        {
          id: 12345,
          title: 'Morning Sunshine',
          newPlyList: false,
          tracks: [

            {
              artwork_url: "https://i1.sndcdn.com/artworks-000150027827-4exjil-large.jpg",
              attachments_uri: "https://api.soundcloud.com/tracks/250711755/attachments",
              bpm: null,
              comment_count: 9500,
              commentable: true,
              created_at: "2016/03/07 20:25:55 +0000",
              description: "Check out the new merch! merch.illenium.com/↵Follow me on tour! illenium.com/#tourSpotify: https://open.spotify.com/track/1yNbAK2NOZkJO0M1E7KpL6↵↵ILLENIUM:↵@illeniumofficial | facebook.com/illenium | twitter.com/illeniummusic↵↵Huge thank you to @thechainsmokers for letting me remix this amazing tune!! Hope to see you guys on the road!!↵↵THE CHAINSMOKERS↵@thechainsmokers | facebook.com/thechainsmokers | twitter.com/thechainsmokers↵↵PREMIERE - http://thissongissick.com/#sthash.V4IvZisw.dpbs",
              download_count: 0,
              download_url: null,
              downloadable: false,
              duration: 219082,
              embeddable_by: "all",
              favoritings_count: 0,
              genre: "Dance & EDM",
              id: 250711755,
              isrc: null,
              key_signature: "",
              kind: "track",
              label_id: null,
              label_name: null,
              last_modified: "2017/04/04 21:38:31 +0000",
              license: "all-rights-reserved",
              likes_count: 1112098,
              monetization_model: "NOT_APPLICABLE",
              original_content_size: 57947444,
              original_format: "wav",
              permalink: "the-chainsmokers-dont-let-me-down-illenium-remix",
              permalink_url: "https://soundcloud.com/illeniumofficial/the-chainsmokers-dont-let-me-down-illenium-remix",
              playback_count: 20006810,
              policy: "ALLOW",
              purchase_title: "Spotify",
              purchase_url: "https://play.spotify.com/track/1yNbAK2NOZkJO0M1E7KpL6",
              release: "",
              release_day: null,
              release_month: null,
              release_year: null,
              reposts_count: 133780,
              sharing: "public",
              state: "finished",
              stream_url: "https://api.soundcloud.com/tracks/250711755/stream",
              streamable: true,
              tag_list: "dance Edm melodic ",
              title: "The Chainsmokers - Don't Let Me Down (Illenium Remix)",
              track_type: null,
              uri: "https://api.soundcloud.com/tracks/250711755",
              user_favorite: false,
              user_id: 27111815,
              user_playback_count: null,
              video_url: null,
              waveform_url: "https://w1.sndcdn.com/jjFkf5VfwIuy_m.png"
            }
          ]
        }]
    };

    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
    this.trackTitleSlicer = this.trackTitleSlicer.bind(this);
    this.updatePlyListTitle = this.updatePlyListTitle.bind(this);
    this.addNewPlyList = this.addNewPlyList.bind(this);
    this.addTrackToPlyList = this.addTrackToPlyList.bind(this);
    this.removeTrackFromPlyList = this.removeTrackFromPlyList.bind(this);
    this.setOldPlyList = this.setOldPlyList.bind(this);

  }


  updateCurrentTrack(newTrack) {

    this.setState({
      currentTrack: Object.assign({}, newTrack),
      playerVisible: true
    })
  }

  trackTitleSlicer(str, num) {
    if (str.length > num) {
      return str.slice(0, num - 3) + '...'
    }
    else {
      return str;
    }
  }

  addTrackToPlyList(plyListId, track) {

    const playLists = [...this.state.plyListData];

    let plyListTem = playLists.find((plyList) => plyList.id == plyListId);

    plyListTem.tracks.push(track);

    this.setState({plyListData: playLists, dropDownUpdated:true});


  }

  removeTrackFromPlyList(plyListId, track) {
    const playLists = [...this.state.plyListData];

    let plyListTem = playLists.find((plyList) => plyList.id == plyListId);
    let tempTrack = plyListTem.tracks.find((temTrack) => temTrack.id === track.id);

    const index = plyListTem.tracks.indexOf(tempTrack);
    plyListTem.tracks.splice(index, 1);

    this.setState({plyListData: playLists});

  }

  updatePlyListTitle(plyListId, newTitel) {
    const playLists = [...this.state.plyListData];
    let plyListTem = playLists.find((plyList) => plyList.id === plyListId);
    plyListTem.title = newTitel;

    this.setState({plyListData: playLists});
  }


  setOldPlyList(plyListId){
    const playLists = [...this.state.plyListData];
    let plyListTem = playLists.find((plyList) => plyList.id === plyListId);
    plyListTem.newPlyList = false;

    this.setState({plyListData: playLists});

  }


  addNewPlyList(track) {
    const playLists = [...this.state.plyListData];
    console.info(track);
    if(track === undefined) {
      playLists.push({
        id: uuid(),
        title: '',
        newPlyList: true,
        tracks: []
      });
    }
else {

      playLists.push({
        id: uuid(),
        title: '',
        newPlyList: true,
        tracks: [track]
      });
      }

    this.setState({plyListData: playLists});
  }

  render() {

    return <div className="root-app-wraper">
      <TopBar/>
      <main>
        <Switch>
          <Route exact path="/" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route exact path="/explore" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route path="/explore/:genre" render={(props) => {
            return <Explore updateCurrentTrack={ this.updateCurrentTrack }
                            trackTitleSlicer={ this.trackTitleSlicer }
                            plyListData={this.state.plyListData}
                            addTrackToPlyList={this.addTrackToPlyList}
                            removeTrackFromPlyList={this.removeTrackFromPlyList}
                            addNewPlyList={this.addNewPlyList}
                            {...props}/>
          }
          }/>
          <Route path="/playlists" render={ (props) => {

            return <PlayLists
              updateCurrentTrack={ this.updateCurrentTrack }
              trackTitleSlicer={ this.trackTitleSlicer }
              updatePlyListTitle={this.updatePlyListTitle}
              plyListData={this.state.plyListData}
              addNewPlyList={this.addNewPlyList}
              addTrackToPlyList={this.addTrackToPlyList}
              removeTrackFromPlyList={this.removeTrackFromPlyList}
              setOldPlyList={this.setOldPlyList}


              {...props}/>
          }
          }/>
        </Switch>
      </main>
      <Player track={ this.state.currentTrack } playerVisible={this.state.playerVisible}/>
    </div>

  }

}


// const playLists = [...this.state.playLists];
//
// const onePlayList = playLists.find((aPlayList) => aPlayList.id===id);
// onePlayList.title = name;
// this.setState({playLists: playLists})
