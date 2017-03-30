/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react'

export default function signup() {

  return (
    <div className="sign-up">
      <div className="sign-up-card">
        <div className="sign-up-logo">
          <div className="fa fa-mixcloud"></div>
          <h1>SongCloud</h1>
        </div>


        <form>
          <h2>create account</h2>
          <div className="input-container">
            <label className="input-label">User name</label>
            <input type="text" required placeholder="Username"/>
          </div>
         <div className="input-container">
           <label className="input-label">User name</label>
           <input type="password" required placeholder="Password"/>
         </div>
          <button className="btn--blue">continue</button>
          <div className="sign-up-footer">
            <p>already have an account?</p>
            <a href="#">sign in</a>
          </div>
        </form>

      </div>
    </div>
  )
}
