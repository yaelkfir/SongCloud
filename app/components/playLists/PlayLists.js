/**
 * Created by yaelo on 3/28/17.
 */
import './play-lists.scss'

import React from 'react'


import PlyListUl from '../playList/PlyList'
import uuid from 'uuid';
import { connect } from 'react-redux';
import MDSpinner from "react-md-spinner";



class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'playList'
    };

  }

  createPlyListsUls(plyList,i) {

    let isPlyListNew = plyList.newPlyList? true: false;
    let isInputVisible = plyList.newPlyList? true: false;

    return <div key={uuid()} ref={'scroll'+plyList.id} data={plyList.id}>
    <PlyListUl

      id={`${plyList.id}`}
      plyList={plyList}
      page={this.state.page}
      trackTitleSlicer={ this.props.trackTitleSlicer }
      inputShowing={isInputVisible}
      newPlyList={isPlyListNew}
      player={this.props.player}

    />
    </div>
  }

  scrollMadaFucker(event){

    this.refs[event.target.id].scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

  createSideBar(plyList) {

    const plyListTitle = this.props.trackTitleSlicer(plyList.title, 25);

    return <li key={uuid()} id={'scroll'+ plyList.id} onClick={(event)=> this.scrollMadaFucker(event)}>
      <p id={'scroll'+ plyList.id} >{plyListTitle}</p>
    </li>

  }

  handelNewPlyList(){

    const plyListId = uuid();
    this.props.storeAddNewPlyList(plyListId);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:3000/playlist');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      id: plyListId,
      title: '',
      newPlyList: false,
      tracks: []
    }))
  }

  render() {

    const playListContainerClass = (this.props.playerVisible)?'playlist-container player-on' :'playlist-container' ;

    if(this.props.playListData){

      return <div className="playlist-page">
        <div className="side-bar">
          <button className="next-btn btn-blue" onClick={() => {this.handelNewPlyList()}}>add new playlist</button>
          <ul className="play-lists-list">
            {(this.props.playListData || []).map((plyList,i) => this.createSideBar(plyList,i))}
          </ul>
        </div>

        <div className={playListContainerClass}>
          {(this.props.playListData || []).map((plyList,i) => this.createPlyListsUls(plyList,i))}
        </div>
      </div>
    }
else {
      return(
        <div className="explore-container">
          <CategoryList/>
          <div className="spinner-wrapper">
            <MDSpinner size={80} duration={2000} singleColor="#03a9f4"/>
          </div>
        </div>
      )
    }
  }

}

function mapStateToProps(stateData) {

  return {
    playerVisible: stateData.playerVisible,
    playListData: stateData.playListData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeAddNewPlyList(plyListId){
      dispatch({
        type: 'ADD_NEW_PLAY_LIST',
        track:false,
        plyListId:plyListId
      });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Playlists);



