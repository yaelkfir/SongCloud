/**
 * Created by yaelo on 3/28/17.
 */
import './play-lists.scss'

import React from 'react'


import PlyListUl from '../playList/PlyList'
import uuid from 'uuid';
import { connect } from 'react-redux';


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

    console.info(i);

    let plyListNum = plyList.id;
    console.info(plyListNum);
    return <div key={uuid()} ref={'scroll'+plyList.id} data={plyList.id}>
    <PlyListUl

      id={`${plyList.id}`}
      plyList={plyList}
      page={this.state.page}
      trackTitleSlicer={ this.props.trackTitleSlicer }
      inputShowing={isInputVisible}
      newPlyList={isPlyListNew}

    />
    </div>
  }

  scrollMadaFucker(event){
    this.refs[event.target.id].scrollIntoView({ behavior: 'smooth' });

  }

  createSideBar(plyList) {
//nav list
    const plyListTitel = this.props.trackTitleSlicer(plyList.title, 25);

    return <li key={uuid()} id={'scroll'+ plyList.id} onClick={(event)=> this.scrollMadaFucker(event)}>
      <p id={'scroll'+ plyList.id} >{plyListTitel}</p>
    </li>

  }

  render() {
    return <div className="playlist-page">
      <div className="side-bar">
        <button className="next-btn" onClick={() => {this.props.handelNewPlyList()}}>add new playlist</button>
        <ul className="play-lists-list">
          {this.props.playListData.map((plyList,i) => this.createSideBar(plyList,i))}
        </ul>
      </div>

      <div className="playlist-container">
        {this.props.playListData.map((plyList,i) => this.createPlyListsUls(plyList,i))}
      </div>
    </div>
  }

}

function mapStateToProps(stateData) {

  return {
    playListData: stateData.playListData,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handelNewPlyList(){
      dispatch({
        type: 'ADD_NEW_PLAY_LIST',
        track:false
      });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Playlists);
