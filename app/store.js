/**
 * Created by yaelo on 4/12/17.
 */
import { createStore, combineReducers } from 'redux';

import currentTrack from './reducers/current-track';
import playerVisible from './reducers/player-visible';
import playListData from './reducers/plyList-data';

const reducer = combineReducers({
  currentTrack,
  playerVisible,
  playListData
});

const store = createStore(reducer);

export default store;
