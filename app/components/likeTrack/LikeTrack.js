import React from 'react'
// import TrackDrop from './TrackDrop'
import {
  NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../store'

class LikeTrack extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      openedDropDown: false,
      inPlyList:false,
      currentPage: '',
      onPlyList: null

    };

    this.isTrackOnPlyList = this.isTrackOnPlyList.bind(this);

  }

  componentDidMount(){
    this.setState({onPlyList: this.props.onPlyList});
  }

  handelNewPlyList(){
    store.dispatch({
      type: 'ADD_NEW_PLAY_LIST',
      track: this.props.trackData
    });
  }

  handleInputChange(event){
      const target = event.target;

    if(target.type === 'checkbox'){


      if(target.checked === true){

        this.setState({onPlyList:true});

        this.props.addTrackToPlyList(this.props.trackData, target.id);
      }
          // store.dispatch({
          //   type: 'ADD_TRACK_TO_PLAY_LIST',
          //   track:this.props.trackData,
          //   plyListId:target.id
          // });


      else {

        const storeData = store.getState();
        storeData.playListData.forEach((plyList)=> {
          const onPlyList = plyList.tracks.find((track) => track.id === this.props.trackData.id);
console.info(onPlyList);
         if(onPlyList){
           this.setState({onPlyList:true});
         }
         else {
           this.setState({onPlyList:false});
         }
        });

        this.props.removeFromPlyList(this.props.trackData,target.id)
        // store.dispatch({
        //   type:'REMOVE_TRACK_FROM_PLAY_LIST',
        //   track:this.props.trackData,
        //   plyListId:target.id
        // });
      }
    }
  }

  toggelDropDwonState() {
    this.setState({currentPage:this.props.page}, () => {

      (this.state.openedDropDown)
        ? this.setState({openedDropDown: false})
        : this.setState({openedDropDown: true});

    })
  }

  isTrackOnPlyList(plyList){
    let plylistTem = plyList.tracks.find((plyListTrack) => this.props.trackData.id === plyListTrack.id);

    if(plylistTem){
      return <input type="checkbox" name="plyList" value={plyList.title} id={plyList.id} defaultChecked={true} onChange={(event)=> {this.handleInputChange(event)}}/>
    }
    else {
      return <input type="checkbox" name="plyList" value={plyList.title} id={plyList.id} onChange={
        (event)=>{this.handleInputChange(event)}}/>
    }
  }

  dropDownMode(){
    if(this.state.currentPage === 'explore'){

      return <div>
        <h4>add to playlist</h4>
        <button onClick={()=>this.handelNewPlyList()}><NavLink to="/playlists">create playlist +</NavLink></button>
      </div>;

    }

    else {
      return <div>
        <h4>edit playlist</h4>
      </div>;
    }
  }

  heartIconMode(){
    if(!this.state.onPlyList){
      return <span className="fa fa-heart-o blue"  aria-hidden="true" onClick={ () => this.toggelDropDwonState() }/>
    }

    else {
      return <span className="fa fa-heart"  aria-hidden="true" onClick={ () => this.toggelDropDwonState() }/>
    }
  }


  handelDropDown() {
    const storeData = store.getState();

    return (
      <div  ref={(div)=> this.dropDown = div} >
        <div className="like-drop-down">
          {this.heartIconMode()}
          <div className='track-drop-list'>
            {this.dropDownMode()}
            <ul>
              {
                storeData.playListData.map((plyList) => {

                return<li key={plyList.id}>
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
        <div className="click-background" onClick={ () => this.toggelDropDwonState() }/>
      </div>
    )
  };

  render() {
    if (!this.state.openedDropDown) {
      if(!this.state.onPlyList){
        return (
          <div className="like-drop-down">
            <span className="fa fa-heart-o blue"  aria-hidden="true" onClick={ () => this.toggelDropDwonState() }/>
          </div>
        )
      }
      if(this.state.onPlyList){

       return <div className="like-drop-down">
        <span className="fa fa-heart"  aria-hidden="true" onClick={ () => this.toggelDropDwonState() }/>
        </div>
      }
    }

    else {
        return this.handelDropDown();
      }
    }
}

/*
 import { connect } from 'react-redux';
 */
function mapDispatchToProps(dispatch) {
  return {
    addTrackToPlyList(track, plylist){
      dispatch({
        type: 'ADD_TRACK_TO_PLAY_LIST',
        track:track,
        plyListId:plylist
      });
    },
    removeFromPlyList(track, plylist){
      dispatch({
        type:'REMOVE_TRACK_FROM_PLAY_LIST',
        track:track,
        plyListId:plylist
      });
    }
  }
}

export default connect(null,mapDispatchToProps)(LikeTrack);
