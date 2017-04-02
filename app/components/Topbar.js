/**
 * Created by yaelo on 3/28/17.
 */


import React from 'react'

import {
  NavLink
} from 'react-router-dom';



export default function Topbar() {

return(
    <header>

      <NavLink to="/" className="logo">
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
          <input className="search" type="text" placeholder="search"/>
        </div>

        <div className="log-out">
          <button type="button" className="log-out">logout</button>
        </div>
      </div>

    </header>
)
}


