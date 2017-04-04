import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import './assets/styles/top-bar.scss';
import './assets/styles/track-list.scss';
import './assets/styles/category-list.scss';
import './assets/styles/pagination.scss';
import './assets/styles/player.scss';
import './assets/styles/play-list.scss';
// import './assets/styles/sign-up.scss';


import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/Routes.js'

ReactDOM.render(<Routes/>, document.querySelector('#root'));
