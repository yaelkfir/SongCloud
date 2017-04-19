/**
 * Created by yaelo on 3/28/17.
 */

import './top-bar.scss'
import React from 'react'

import {
  NavLink
} from 'react-router-dom';



export default class Topbar extends React.Component {
  constructor() {
    super();
  }

 searchSumbmit(e){
  e.preventDefault();

  const search = this.searchInput.value;

   this.searchInput.value = '';
   this.props.history.push(`/explore/${search}?search=true`);
  }

  render() {

    return (
      <header>

        <NavLink to="/explore" className="logo">
          <i className="fa fa-mixcloud" aria-hidden="true"/>
          <span>SongCloud</span>
        </NavLink>

        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/explore" activeClassName="nav-selected">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/playlists" activeClassName="nav-selected">Playlists</NavLink>
            </li>
          </ul>
        </nav>

        <div className="right-side-header">

          <div className="search-input">
            <span className="fa fa-search" aria-hidden="true"/>
            <form onSubmit={(e) => this.searchSumbmit(e)}>
              <input
                ref={(ref) => this.searchInput = ref}
                className="search"
                type="search"
                placeholder="search"
              />
            </form>

          </div>

          <NavLink to="/Signup" className="log-out">
            <button type="button" className="log-out">logout</button>
          </NavLink>

        </div>

      </header>
    )
  }
}


//https://api.soundcloud.com/tracks?client_id=YOUR_CLIENT_ID&limit=LIMIT&offset=OFFSET&q=SEARCH
/*
 let limit = this.state.limit;
 let offset = this.state.offset;
 const genre = this.props.match.params.genre;

 const xhr = new XMLHttpRequest();

 xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&app&limit=${limit}&offset=${offset}&tags=${genre}`);
 xhr.addEventListener('load', () => {

 this.setState({tracks: JSON.parse(xhr.responseText), trackLoading: 'loaded'});
 });
 xhr.addEventListener('error', () => {

 this.setState({trackLoading: 'error'});
 });
 xhr.send();

 */
