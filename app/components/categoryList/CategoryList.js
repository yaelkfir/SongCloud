/**
 * Created by yaelo on 4/1/17.
 */
import './category-list.scss';

import React from 'react'

import {
  NavLink
} from 'react-router-dom';

export default function CategoryList (){
  return <ul className="category-list">
    <li className="category-title"><span>Genres:</span></li>
    <li className="category"><NavLink to="/explore/trance" activeClassName="selected-category">trance</NavLink></li>
    <li className="category"><NavLink to="/explore/house" activeClassName="selected-category">house</NavLink></li>
    <li className="category"><NavLink to="/explore/dubstep" activeClassName="selected-category">dubstep</NavLink></li>
  </ul>
}


/*
 <header>
 <NavLink to="/" className="logo">
 <i className="fa fa-mixcloud" aria-hidden="true"/>
 <span>SongCloud</span>
 </NavLink>
 <nav>
 <ul className="nav-list">
 <li>
 <NavLink to="/explore" exact activeClassName="nav-selected">Explore</NavLink>
 </li>
 <li>
 <NavLink to="/playlists" activeClassName="nav-selected">Playlists</NavLink>
 </li>
 </ul>
 </nav>


 1. Create component `GenreChooserComponent` that renders three links:
 * `/explore/trance` (`<NavLink to="/explore/trance" activeClassName="selected-genre">Trance</NavLink>`)
 * `/explore/house`
 * `/explore/dubstep`
 1. We add a `<Route>` to the BrowserRouter/Switch.
 `<Route path="/explore/:genre" component={ ExplorerComponent }/>`
 1. We get the genre for the `SongsComponent` in `this.props.match.params.genre`.
 XHR to `https://create-bootcamp-songcloud-server.now.sh/tracks?genre=${genre}` (in componentDidMount)
 this.setState{songs: ...}

 */
