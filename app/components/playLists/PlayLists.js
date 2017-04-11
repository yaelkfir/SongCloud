/**
 * Created by yaelo on 3/28/17.
 */
import './play-lists.scss'

import React from 'react'


import PlyListUl from '../playList/PlyList'
import uuid from 'uuid';

export default class Playlists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'playList'
    };

  }

  /*
   export default (props) => (
   <Page>

   <Navbar brand={brand} className="navbar-fixed-top">
   <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
   <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
   <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
   <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
   </Navbar>


   <Section id="sample-code">

   </Section>

   <div id="features">

   </div>

   <footer id="footer">

   </footer>

   </Page>

   */

  createPlyListsUls(plyList) {

    return <div id = {`${plyList.id}`}>
    <PlyListUl
      key={plyList.id}
      plyList={plyList}
      updateCurrentTrack={ this.props.updateCurrentTrack }
      page={this.state.page}
      trackTitleSlicer={ this.props.trackTitleSlicer }
      plyListData={this.props.plyListData}
      updatePlyListTitle={this.props.updatePlyListTitle}
      inputShowing={false}
      newPlyList={false}
      addTrackToPlyList={this.props.addTrackToPlyList}

    />
    </div>
  }



createSideBar(plyList){
//nav list
  /*
   <Navbar brand={brand} className="navbar-fixed-top">
   <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
   <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
   <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
   <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
   </Navbar>
   */
    const plyListTitel = this.props.trackTitleSlicer(plyList.title,25);

      return <li key={uuid()}>
      <p>{plyListTitel}</p>
    </li>

  }

  render() {
    console.info(this.props);

    return <div className="playlist-page">
      <div className="side-bar">
        <button className="next-btn" onClick={()=> this.props.addNewPlyList()}>add new playlist</button>
        <ul className="play-lists-list">
          {this.props.plyListData.map((plyList) => this.createSideBar(plyList))}
        </ul>
      </div>

      <div className="playlist-container">
        {this.props.plyListData.map((plyList) => this.createPlyListsUls(plyList))}
      </div>
    </div>
  }

}


