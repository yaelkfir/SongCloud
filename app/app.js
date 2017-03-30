import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import './assets/styles/top-bar.scss';

import ReactDOM from 'react-dom';
import React from 'react';

import Root from './components/Root.js'

ReactDOM.render(<Root/>, document.querySelector('#root'));
