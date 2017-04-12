import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';



import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/routes/Routes.js'
import store from './store'

function renderApp(){
  ReactDOM.render(<Routes/>, document.querySelector('#root'));
}

renderApp();

store.subscribe(()=>{
  renderApp()
});
