export default function tracksToPlayReducer(tracksToPlay = [], action) {
  if (action.type === 'SET_TRACKS_TO_PLAYER') {
    return action.tracks ;
  }
  return tracksToPlay;
}

