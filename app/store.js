/**
 * Created by yaelo on 4/12/17.
 */
import { createStore, combineReducers } from 'redux';

import currentTrack from './reducers/current-track';
import playerVisible from './reducers/player-visible';
import playListData from './reducers/plyList-data';
import audioPlayerMode from './reducers/audio-player-mode';
import tracksToPlay from './reducers/track-list';

const reducer = combineReducers({

  tracksToPlay,
  currentTrack,
  playerVisible,
  playListData,
  audioPlayerMode
});

const store = createStore(reducer);

function GetPlayListXhr() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://localhost:3000/a-file`);
  xhr.addEventListener('load', () => {

    store.dispatch({
      type: 'SET_FIRST_PLY_LIST_DATA',
      FirstPlyListsData:JSON.parse(xhr.responseText)
    });
  });

  xhr.send();

}

GetPlayListXhr();

export default store;
