export default function currentTrackReducer(currentTrack = {}, action) {
  if (action.type === 'UPDATE_CURRENT_TRACK') {
    return action.track;
  }

  return currentTrack;
}

/*
 updateCurrentTrack(newTrack) {

 this.setState({
 currentTrack: Object.assign({}, newTrack),
 playerVisible: true
 })
 }
 */
