import React from 'react'
import TrackList from '../trackList/TrackList'
import {connect} from 'react-redux';


class PlyListUl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputShowing: null,
      inputValue: null,
      title: null,
      newPlyList: null,
    };

    this.toggelDropDwonState = this.toggelDropDwonState.bind(this);

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
    const newPlyList = this.props.inputShowing;

    this.setState({
      inputShowing: inputShowing,
      inputValue: inputValue,
      title: title,
      newPlyList: newPlyList
    });

    if (this.state.inputShowing) {
      this.nameInput.focus();
    }
  }

  handelTitleChange(event) {

    let newTitle = event.target.value !== '' ? event.target.value : 'untitled';

     this.setState({
        inputValue: newTitle,
        title: newTitle
      });

      this.props.updatePlyListTitle(newTitle , this.props.plyList.id);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:3000/playlist/updatetitle');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({

      plyListId: this.props.plyList.id,
      title: newTitle

    }));

  }

  inputKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.setOldPlayList(this.props.plyList.id);
      this.toggelDropDwonState();
      this.handelTitleChange(event)
    }
  }

  removePlyListHendler(plyListId) {
///playlist/remove'
    this.props.removePlyList(plyListId)

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:3000/playlist/remove');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({

      plyListId: plyListId,

    }));


  }


  toggelDropDwonState() {
    (this.state.inputShowing) ? this.setState({inputShowing: false}) : this.setState({inputShowing: true});
  }

  render() {


    const plyListinput = (this.state.inputShowing)
      ? <input type="text" value={this.state.inputValue} placeholder="untitled"
               ref={(input) => this.nameInput = input}
               onBlur={ (event) => {

                 this.props.setOldPlayList(this.props.plyList.id);
                 this.toggelDropDwonState();
                 this.handelTitleChange(event)
               } }
               onKeyDown={(event) => this.inputKeyDown(event)}
               onChange={(event) => this.setState({inputValue: event.target.value})}/>
      : null;


    const plyListTitle = (!this.state.inputShowing)
      ? <div>
        <h3 onClick={(event) => this.toggelDropDwonState(event)}>{this.state.title}</h3>
        <div className="number-badge-container">
          <span className="number-badge">{this.props.plyList.tracks.length}</span>
        </div>
      </div>
      : null;


    return <div className="play-list-container">

      <div className="list-title">
        <div>

          {plyListinput}
          {plyListTitle}

          <button className="delete-playlist-btn" onClick={() => {
            this.removePlyListHendler(this.props.plyList.id)
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

export default connect(mapStateToProps, mapDispatchToProps)(PlyListUl);
