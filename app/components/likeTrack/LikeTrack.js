import React from 'react'
// import TrackDrop from './TrackDrop'
import {
  NavLink
} from 'react-router-dom';

export default class LikeTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openedDropDown: false,
      inPlyList:false,
      currentPage: '',
      onPlyList: null

    };

    this.isTrackOnPlyList = this.isTrackOnPlyList.bind(this);

  }

  componentWillReceiveProps(){

  }

  componentDidMount(){
    console.info('mounted');
    this.setState({onPlyList: this.props.onPlyList});
  }

  handleInputChange(event){
      const target = event.target;

    if(target.type === 'checkbox'){
      if(target.checked === true){

        this.props.addTrackToPlyList(target.id, this.props.trackData)

      }
      else {

        this.props.removeTrackFromPlyList(target.id, this.props.trackData)

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
        <button onClick={()=>this.props.addNewPlyList(this.props.trackData)}><NavLink to="/playlists">create playlist +</NavLink></button>
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

    return (
      <div  ref={(div)=> this.dropDown = div} >
        <div className="like-drop-down">
          {this.heartIconMode()}
          <div className='track-drop-list'>
            {this.dropDownMode()}
            <ul>
              {
                this.props.plyListData.map((plyList) => {

                return<li key={plyList.id}>
                  <label htmlFor={plyList.id} className="checkbox">{this.props.trackTitleSlicer(plyList.title, 14)}
                    {this.isTrackOnPlyList(plyList)}
                    <span className="indicator"/>
                  </label>
                </li>;

              })}
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
