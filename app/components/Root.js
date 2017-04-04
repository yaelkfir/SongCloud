
import React from 'react'

import {
  Route,
  Switch,
  Redirect
}
  from 'react-router-dom';

import Player from './Player'
import PlayLists from './PlayLists'
import Explore from './Explore'
import TopBar from './Topbar'

export default class Root extends React.Component {
  constructor(){
    super();

    this.state={
      currentTrack: {},
      playlist:[]
    };

    this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
  }


  updateCurrentTrack(newTrack){

    this.setState({
      currentTrack: Object.assign({},newTrack)
    })
  }

  render() {

    console.info('current track', this.state.currentTrack);

    return <div className="app-wraper">
      <TopBar/>
      <main>
        <Switch>
          <Route exact path="/" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route exact path="/explore" component={() => (<Redirect to="/explore/trance"/>)}/>
          <Route path="/explore/:genre" render={(props)=>{
            return <Explore updateCurrentTrack={ this.updateCurrentTrack }
                            {...props}/> }}/>
          <Route path="/playlists" component={ PlayLists }/>
        </Switch>
      </main>
      <Player track={ this.state.currentTrack }/>
    </div>

  }
}


