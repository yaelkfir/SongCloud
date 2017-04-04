/**
 * Created by yaelo on 4/4/17.
 */

import React from 'react'

import Signup from './Signup'
import Signin from './Signin'
import Root from './Root'

import {
  BrowserRouter,
  Route,
  Switch,
}

from 'react-router-dom';

  export default function Routes() {

      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/signin" component={ Signin }/>
            <Route exact path="/signup" component={ Signup }/>
            <Route path="/" component={ Root }/>
          </Switch>
        </BrowserRouter>
      );

}

