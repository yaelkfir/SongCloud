import React from 'react'
import TrackList from '../trackList/TrackList'
import {connect} from 'react-redux';

import {serverLocation} from '../../serverLocation';


class PlyList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputShowing: null,
      inputValue: null,
      title: null,
      newPlyList: null,
    };

    this.toggleInputState = this.toggleInputState.bind(this);

  }

  componentDidUpdate() {

    if (this.state.inputShowing) {
      this.nameInput.focus();
    }
  }

  componentDidMount() {

    const inputShowing = this.props.inputShowing;
    const inputValue = this.props.plyList.title ? this.props.plyList.title : '';
    const title = this.props.plyList.title ? this.props.plyList.title : 'untitled';

    this.setState({
      inputShowing: inputShowing,
      inputValue: inputValue,
      title: title,
      newPlyList: inputShowing
    });

    if (this.state.inputShowing) {
      this.nameInput.focus();
    }
  }

  //playlist title & input
  handelTitleChange(event) {

    let newTitle = event.target.value !== '' ? event.target.value : 'untitled';

    this.setState({
      inputValue: newTitle,
      title: newTitle
    });

    this.props.updatePlyListTitle(newTitle, this.props.plyList.id);

    //xhr req
    const xhr = new XMLHttpRequest();

    xhr.open('POST', `${serverLocation}/playlist/updatetitle`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({

      plyListId: this.props.plyList.id,
      title: newTitle

    }));

  }

  inputKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.setOldPlayList(this.props.plyList.id);
      this.toggleInputState();
      this.handelTitleChange(event)
    }
  }

  toggleInputState() {
    if(this.state.inputShowing){
      this.setState({inputShowing: false});
    }
    else{
      this.setState({inputShowing: true});
    }
  }

  //remove playlist
  removePlyListHandler(plyListId) {
    console.info('work');

    this.props.removePlyList(plyListId);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', `${serverLocation}/playlist/remove`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({

      plyListId: plyListId,

    }));


  }

  msToTime(duration) {
  const seconds = parseInt((duration / 1000) % 60);
  const minutes = parseInt((duration / (1000 * 60)) % 60);

  return (((minutes < 10) ? "0" + minutes : minutes) + ":" + ((seconds < 10) ? "0" + seconds : seconds));
}

  //render
  render() {


    const plyListInput = (this.state.inputShowing)
      ? <input type="text" value={this.state.inputValue} placeholder="untitled"
               ref={(input) => this.nameInput = input}
               onBlur={ (event) => {
                 this.props.setOldPlayList(this.props.plyList.id);
                 this.toggleInputState();
                 this.handelTitleChange(event)
               } }
               onKeyDown={(event) => this.inputKeyDown(event)}
               onChange={(event) => this.setState({inputValue: event.target.value})}/>
      : null;


    const plyListTitle = (!this.state.inputShowing)
      ? <div>
        <h3 onClick={(event) => this.toggleInputState(event)}>{this.state.title}</h3>
        {/*<p>{this.msToTime(plyListDuration)}</p>*/}
        <div className="number-badge-container">
          <span className="number-badge">{this.props.plyList.tracks.length}</span>
        </div>
      </div>
      : null;


    return <div className="play-list-container">

      <div className="list-title">
        <div>

          {plyListInput}
          {plyListTitle}

          <button className="delete-playlist-btn" onClick={() => {
            console.info('delete-playlist-');
            this.removePlyListHandler(this.props.plyList.id);
          }}>delete
          </button>
        </div>
      </div>

      <TrackList
        tracks={this.props.plyList.tracks}
        page={this.props.page}
        trackTitleSlicer={ this.props.trackTitleSlicer }
      />
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

    removePlyList(plyListId){

      setTimeout(() => {
        dispatch({
          type: 'REMOVE_LIST',
          plyListId: plyListId
        });
      }, 300);

    },

    updatePlyListTitle(title, plyListId){
      dispatch({
        type: 'UPDATE_PLAY_LIST_TITLE',
        newTitle: title,
        plyListId: plyListId
      });

    },

    setOldPlayList(plyListId){
      dispatch({
        type: 'SET_OLD_PLAY_LIST',
        plyListId: plyListId
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlyList);
