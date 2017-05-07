import './root.scss'

import React from 'react'

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

    return <div className="root-app-wrapper">

      <TopBar {...this.props} />
      <main>

        <Switch>

          <Route exact path="/" component={() => (<Redirect to="/explore/trance"/>)}/>

          <Route exact path="/explore" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route path="/explore/:genre" render={(props) => {
            return <Explore
                            trackTitleSlicer={ this.trackTitleSlicer }
                            {...props}/>
          }}/>

          <Route exact path="/playlist" component={() => (<Redirect to="/playlists"/>)}/>
          <Route path="/playlists" render={ (props) => {

            return <PlayLists
              trackTitleSlicer={ this.trackTitleSlicer }
              {...props}/>
          }}/>

          <Route path='*' component={()=> <Redirect to="/explore/hip-hop"/> }/>
        </Switch>
      </main>
      <Player/>
    </div>

  }

}
