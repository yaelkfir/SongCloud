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

   scrollTo(elm){
   scroll.scrollTo(`${elm}`, {
   duration: 1500,
   delay: 100,
   smooth: true,
   containerId: 'ContainerElementID'
   };


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

    let isPlyListNew = plyList.newPlyList? true: false;
    let isInputVisible = plyList.newPlyList? true: false;

    return <PlyListUl

      id={`${plyList.id}`}
      key={plyList.id}
      plyList={plyList}
      updateCurrentTrack={ this.props.updateCurrentTrack }
      page={this.state.page}
      trackTitleSlicer={ this.props.trackTitleSlicer }
      plyListData={this.props.plyListData}
      updatePlyListTitle={this.props.updatePlyListTitle}
      inputShowing={isInputVisible}
      newPlyList={isPlyListNew}
      addTrackToPlyList={this.props.addTrackToPlyList}
      removeTrackFromPlyList={this.props.removeTrackFromPlyList}
      setOldPlyList={this.props.setOldPlyList}

    />

  }


  createSideBar(plyList) {
//nav list
    /*
     <Navbar brand={brand} className="navbar-fixed-top">
     <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
     <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
     <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
     <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
     </Navbar>
     */
    const plyListTitel = this.props.trackTitleSlicer(plyList.title, 25);

    return <li key={uuid()}>
      <p>{plyListTitel}</p>
    </li>

  }

  render() {

    return <div className="playlist-page">
      <div className="side-bar">
        <button className="next-btn" onClick={() => this.props.addNewPlyList()}>add new playlist</button>
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


