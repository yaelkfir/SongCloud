/**
 * Created by yaelo on 4/4/17.
 */

import React from 'react'

import Root from '../root/Root'


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
            <Route path="/" component={ Root }/>
          </Switch>
        </BrowserRouter>
      );

}

