/**
 * Created by yaelo on 4/12/17.
 */
export default function currentTrackReducer(currentTrack = {}, action) {
  if (action.type === 'UPDATE_CURRENT_TRACK') {
    return currentTrack;
  }

  return currentTrack;
}
