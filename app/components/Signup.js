/**
 * Created by yaelo on 3/28/17.
 */

import React from 'react'

export default function signup() {

  function toggelLabel(){




  }

  return (
    <div className="sign-up-page">
      <div className="sign-up-card">

        <div className="sign-up-card-header">

          <div className="fa fa-mixcloud"/>
          <h1>SongCloud</h1>

        </div>



        <form className="sign-up-form">

          <h2>create account</h2>

          <div className="input-container">
            <input type='email' placeholder='email' required/>
          </div>

          <div className='input-container'>
            <input type='password' className="sign-input"  placeholder="password" required/>
          </div>

          <button className="btn-blue">continue</button>

        </form>



        <div className="sign-up-footer">
          <p>already have an account?</p>
          <a href="#">sign in</a>
        </div>

      </div>
    </div>
  )
}
