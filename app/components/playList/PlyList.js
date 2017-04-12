/**
 * Created by yaelo on 4/5/17.
 */

import React from 'react'
import TrackList from '../trackList/TrackList'

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

  handelTitleChange(event){
    if(event.target.value.length>0){
      this.setState({inputValue:event.target.value,
                      title:event.target.value
        });

      this.props.updatePlyListTitle(this.props.plyList.id ,event.target.value)


    }
    else{
      this.setState({
        title:'untitled',
        inputValue:event.target.value
      },);

      this.props.updatePlyListTitle(this.props.plyList.id ,'untitled')

    }
  }

  inputKeyDown(event){
    if (event.keyCode === 13){
      this.props.setOldPlyList(this.props.plyList.id);
      this.toggelDropDwonState();
      this. handelTitleChange(event)
    }
  }

  toggelDropDwonState() {

    (this.state.inputShowing) ? this.setState({inputShowing: false}) : this.setState({inputShowing: true});
  }

  render() {


      const plyListinput = (this.state.inputShowing)
        ?  <input type="text" value={this.state.inputValue} placeholder="untitled"
                  ref={(input)=> this.nameInput = input}
                  onBlur={ (event) => {
                    this.props.setOldPlyList(this.props.plyList.id);
                    this.toggelDropDwonState();
                    this. handelTitleChange(event)
                  } }
                  onKeyDown={(event)=> this.inputKeyDown(event)}
                  onChange={(event) => this.handelTitleChange(event)}/>
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

          </div>
        </div>

        <TrackList tracks={this.props.plyList.tracks}
                   updateCurrentTrack={ this.props.updateCurrentTrack }
                   page={this.props.page}
                   trackTitleSlicer={ this.props.trackTitleSlicer }
                   plyListData={this.props.plyListData}
                   addTrackToPlyList={this.props.addTrackToPlyList}
                   removeTrackFromPlyList={this.props.removeTrackFromPlyList}

        />
      </div>
    }
}
