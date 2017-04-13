import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';



import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/routes/Routes.js'
import store from './store'
import { Provider } from 'react-redux'



function renderApp(){

  ReactDOM.render(
    <Provider store={store}>
    <Routes/>
    </Provider>
    ,document.querySelector('#root')

  );
}

renderApp();



/*
 import {Provider} from 'react-redux'


 function renderApp(){

 ReactDOM.render(
 <Provider store={store}>
 <Routes/>, document.querySelector('#root')
 </Provider>
 );
 }

 *Update app.js:*
 - Remove the `store.subscribe()`
 - Add `<Provider>`:
 ```ReactDOM.render(
 <Provider store={ store }>
 <Routes />
 </Provider>,
 document.querySelector('#root')
 );```

 import React from 'react'
 import { render } from 'react-dom'
 import { Provider } from 'react-redux'
 import { createStore } from 'redux'
 import todoApp from './reducers'
 import App from './components/App'

 let store = createStore(todoApp)

 render(
 <Provider store={store}>
 <App />
 </Provider>,
 document.getElementById('root')
 )



 */
