/**
 * Created by yaelo on 4/5/17.
 */

import React from 'react'
import TrackList from '../trackList/TrackList'
import store from '../../store'

export default class PlyListUl extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputShowing:null,
      inputValue:null,
      title: null,
      newPlyList: null,
    };

    this.toggelDropDwonState = this.toggelDropDwonState.bind(this);

  }

  componentDidUpdate(){
   if(this.state.inputShowing){
     this.nameInput.focus();
   }


  }
  componentDidMount(){

    const inputShowing = this.props.inputShowing;
    const inputValue = this.props.plyList.title? this.props.plyList.title : '';
    const title = this.props.plyList.title? this.props.plyList.title : 'untitled';
    const newPlyList = this.props.inputShowing;

    this.setState({
      inputShowing:inputShowing,
      inputValue:inputValue,
      title:title,
      newPlyList:newPlyList
    });

    if(this.state.inputShowing){
      this.nameInput.focus();
    }
  }

setOldPlayList(){

  store.dispatch({
    type: 'SET_OLD_PLAY_LIST',
    plyListId:this.props.plyList.id
  });

}

  handelTitleChange(event){
    if(event.target.value.length > 0){
      this.setState({inputValue:event.target.value,
                      title:event.target.value
        });


      store.dispatch({
        type: 'UPDATE_PLAY_LIST_TITLE',
        newTitle:event.target.value,
        plyListId:this.props.plyList.id
      });
    }

    else{
      this.setState({
        title:'untitled',
        inputValue:event.target.value
      },);

      store.dispatch({
        type: 'UPDATE_PLAY_LIST_TITLE',
        newTitle:'untitled',
        plyListId:this.props.plyList.id
      });

    }
  }

  inputKeyDown(event){
    if (event.keyCode === 13){
      this.setOldPlayList();
      this.toggelDropDwonState();
      this. handelTitleChange(event)
    }
  }

  removePlyList(){

    setTimeout(()=>{
      store.dispatch({
      type: 'REMOVE_LIST',
      plyListId:this.props.plyList.id
    });}, 300);

  }

  toggelDropDwonState() {
    (this.state.inputShowing) ? this.setState({inputShowing: false}) : this.setState({inputShowing: true});
  }

  render() {


      const plyListinput = (this.state.inputShowing)
        ?  <input type="text" value = {this.state.inputValue} placeholder = "untitled"
                  ref={(input)=> this.nameInput = input}
                  onBlur={ (event) => {
                    this.setOldPlayList();
                    this.toggelDropDwonState();
                    this. handelTitleChange(event)
                  } }
                  onKeyDown={(event)=> this.inputKeyDown(event)}
                  onChange={(event) => this.setState({inputValue:event.target.value})}/>
        : null;


      const plyListTitle = (!this.state.inputShowing)
        ? <div>
          <h3 onClick={(event)=> this.toggelDropDwonState(event)}>{this.state.title}</h3>
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

            <button className="delete-playlist-btn" onClick={()=>this.removePlyList()}>delete</button>
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
