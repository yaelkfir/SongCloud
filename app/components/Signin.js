/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react'

export default function Signin() {

return(
  <div className="sign-up">
    <div className="sign-up-card">
      <div className="sign-up-logo">
        <div className="fa fa-mixcloud"></div>
        <h1>SongCloud</h1>
      </div>


      <form>
        <h2>sign in</h2>
        <label>
          <span>user name</span>
          <input type="text"/>
        </label>
        <label>
          <span>password</span>
          <input type="password"/>
        </label>
        <button>continue</button>
        <div className="sign-up-footer">
          <p>Don’t have an account yet?</p>
          <a href="#">Create Account</a>
        </div>
      </form>

    </div>
  </div>
)
}
