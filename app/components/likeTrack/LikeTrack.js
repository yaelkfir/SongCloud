import React from 'react'
import {
  Link
} from 'react-router-dom';



import {connect} from 'react-redux';
import uuid from 'uuid';
import {serverLocation} from '../../serverLocation';


class LikeTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedDropDown: false,
      currentPage: '',
      onPlyList: null,
      tempPlyListsData: null

    };

    this.isTrackOnPlyList = this.isTrackOnPlyList.bind(this);
    this.JSONUpdatePlyListsData = this.JSONUpdatePlyListsData.bind(this);
  }

  componentDidMount() {
    this.setState({
        onPlyList: this.props.onPlyList,
        tempPlyListsData: this.props.playListData.map((plyList) => plyList)

      }
    );
  }

// http://localhost:3000
  JSONUpdatePlyListsData() {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', `${serverLocation}/playlist/updateplylistfromdropdown`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify(this.state.tempPlyListsData))
  }

  addTrackToTempList(track, plyListId) {

    const playLists = [...this.state.tempPlyListsData];
    let plyListTem = playLists.find((plyList) => `${plyList.id}` === plyListId);
    plyListTem.tracks.push(track);

    this.setState({tempPlyListsData: playLists})
  }

  removeFromTempPlyList(track, plyListId) {

    const playLists = [...this.state.tempPlyListsData];

    let plyListTem = playLists.find((plyList) => `${plyList.id}` === plyListId);

    let tempTrack = plyListTem.tracks.find((temTrack) => temTrack.id === track.id);

    const index = plyListTem.tracks.findIndex((song) => song.id === tempTrack.id);
    plyListTem.tracks.splice(index, 1);

    this.setState({tempPlyListsData: playLists});
  }

  handleInputChange(event) {
    const target = event.target;

    if (target.type === 'checkbox') {


      if (target.checked === true) {

        this.setState({onPlyList: true});

        this.addTrackToTempList(this.props.trackData, target.id)
      }

      else {
        this.removeFromTempPlyList(this.props.trackData, target.id);

        const trackOnPlyList = this.state.tempPlyListsData.find((playList) => playList.tracks.find((temTrack) => this.props.trackData.id === temTrack.id));

        if (trackOnPlyList) {
          this.setState({onPlyList: true});

        }
        else {
          this.setState({onPlyList: false});
        }
      }
    }
  }

  toggleDropDownState() {

    this.setState({currentPage: this.props.page}, () => {
      console.info('toggel');
      if (this.state.openedDropDown) {
        this.setState({openedDropDown: false});
        this.props.updatePlyListsData(this.state.tempPlyListsData);
        this.JSONUpdatePlyListsData();

      }
      else {
        this.setState({openedDropDown: true});
      }
    })
  }

  isTrackOnPlyList(plyList) {
    let plylistTem = plyList.tracks.find((plyListTrack) => this.props.trackData.id === plyListTrack.id);

    if (plylistTem) {
      return <input type="checkbox" name="plyList" value={plyList.title} id={plyList.id} defaultChecked={true}
                    onChange={(event) => {
                      this.handleInputChange(event)
                    }}/>
    }
    else {
      return <input type="checkbox" name="plyList" value={plyList.title} id={plyList.id} onChange={
        (event) => {
          this.handleInputChange(event)
        }}/>
    }
  }

  handelNewPlyList(track) {

    const plyListId = uuid();

    this.props.storeAddNewPlyList(plyListId, track);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', `${serverLocation}/playlist`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      id: plyListId,
      title: '',
      newPlyList: false,
      tracks: [track]
    }))
  }

  dropDownMode() {
    if (this.state.currentPage === 'explore') {

      return <div>
        <h4>add to playlist</h4>

        <Link to="/playlists"><button onClick={
          () => { this.handelNewPlyList(this.props.trackData) }}>
          create playlist +</button></Link>
      </div>;

    }

    else {
      return <div>
        <h4>edit playlist</h4>
      </div>;
    }
  }

  heartIconMode() {
    if (!this.state.onPlyList) {
      return <span className="fa fa-heart-o blue" aria-hidden="true" onClick={ () => this.toggleDropDownState() }/>
    }

    else {
      return <span className="fa fa-heart" aria-hidden="true" onClick={ () => this.toggleDropDownState() }/>
    }
  }

  handelDropDown() {

    return (
      <div ref={(div) => this.dropDown = div}>
        <div className="like-drop-down">
          {this.heartIconMode()}
          <div className='track-drop-list'>
            {this.dropDownMode()}
            <ul>
              {
                this.props.playListData.map((plyList) => {

                  return <li key={uuid()} data={plyList.id}>
                    <label htmlFor={plyList.id} className="checkbox">{this.props.trackTitleSlicer(plyList.title, 14)}
                      {this.isTrackOnPlyList(plyList)}
                      <span className="indicator"/>
                    </label>
                  </li>;

                })
              }
            </ul>
          </div>
        </div>
        <div className="click-background" onClick={ () => this.toggleDropDownState() }/>
      </div>
    )
  };

  render() {
    if (!this.state.openedDropDown) {
      if (!this.state.onPlyList) {
        return (
          <div className="like-drop-down">
            <span className="fa fa-heart-o blue" aria-hidden="true" onClick={ () => this.toggleDropDownState() }/>
          </div>
        )
      }
      if (this.state.onPlyList) {

        return <div className="like-drop-down">
          <span className="fa fa-heart" aria-hidden="true" onClick={ () => this.toggleDropDownState() }/>
        </div>
      }
    }

    else {
      return this.handelDropDown();
    }
  }
}

function mapDispatchToProps(dispatch) {

  return {
    storeAddNewPlyList(plyListId, track){

      dispatch({
        type: 'ADD_NEW_PLAY_LIST',
        track: track,
        plyListId: plyListId
      });
    },

    updatePlyListsData(tempPlylists){
      console.info('tempPlylists', tempPlylists);
      dispatch({
        type: 'UPDATE_PLAY_LISTS_DATA',
        tempPlyListsData: tempPlylists
      });
    },
    addTrackToPlyList(track, plylist){
      dispatch({
        type: 'ADD_TRACK_TO_PLAY_LIST',
        track: track,
        plyListId: plylist
      });
    },
    removeFromPlyList(track, plylist){
      dispatch({
        type: 'REMOVE_TRACK_FROM_PLAY_LIST',
        track: track,
        plyListId: plylist
      });
    }
  }
}

function mapStateToProps(stateData) {

  return {
    playListData: stateData.playListData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeTrack);
