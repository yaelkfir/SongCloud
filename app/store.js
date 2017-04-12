/**
 * Created by yaelo on 4/12/17.
 */
import { createStore, combineReducers } from 'redux';

import currentTrack from './reducers/current-track';

const initialStore = {
  currentTrack: null
};

const reducer = combineReducers({
  currentTrack
});

const store = createStore(reducer, initialStore);

export default store;
