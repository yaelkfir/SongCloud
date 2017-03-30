/**
 * Created by yaelo on 3/28/17.
 */


import React from 'react'

import {
  NavLink
} from 'react-router-dom';



export default function Topbar() {


  /*
   <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
   <li><NavLink to="/about" activeClassName="selected">About us</NavLink></li>
   <li><NavLink to="/asldfjsdf" activeClassName="selected">To infinity, and beyond! 🚀</NavLink></li>
   */
return(
    <header>
      <NavLink to="/" className="logo">
          <i className="fa fa-mixcloud" aria-hidden="true"/>
          <span>tracks</span>
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
      <div className="search-input">
        <input className="search" type="text" placeholder="search"/>
      </div>

      <div className="log-out">
        <button type="button" className="log-out">log out</button>
      </div>
    </header>
)
}


