import './root.scss'

import React from 'react'
import uuid from 'uuid';

import {
  Route,
  Switch,
  Redirect
}
  from 'react-router-dom';

import store from '../../store'


import Player from '../player/Player'
import PlayLists from '../playLists/PlayLists'
import Explore from '../explore/Explore'
import TopBar from '../topBar/Topbar'

export default class Root extends React.Component {

  constructor() {
    super();

    this.state = {

    };
    this.trackTitleSlicer = this.trackTitleSlicer.bind(this);
  }

  trackTitleSlicer(str, num) {
    if (str.length > num) {
      return str.slice(0, num - 3) + '...'
    }
    else {
      return str;
    }
  }
/*
 */
  render() {
    /*
     var data = sessionStorage.getItem('key');
     const playerData = data = sessionStorage.getItem('player');
     */

    return <div className="root-app-wraper">
      <TopBar
        {...this.props}/>
      <main>
        <Switch>
          <Route exact path="/" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route exact path="/explore" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route path="/explore/:genre" render={(props) => {
            return <Explore
                            trackTitleSlicer={ this.trackTitleSlicer }
                            {...props}/>
          }
          }/>
          <Route exact path="/playlist" component={() => (<Redirect to="/playlists"/>)}/>

          <Route path="/playlists" render={ (props) => {

            return <PlayLists
              trackTitleSlicer={ this.trackTitleSlicer }
              {...props}/>
          }
          }/>
        </Switch>
      </main>
      <Player/>
    </div>

  }

}


// const playLists = [...this.state.playLists];
//
// const onePlayList = playLists.find((aPlayList) => aPlayList.id===id);
// onePlayList.title = name;
// this.setState({playLists: playLists})
