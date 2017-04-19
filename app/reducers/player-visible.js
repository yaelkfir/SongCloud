
export default function playerVisible(playerVisible = false, action) {
  if (action.type === 'UPDATE_PLAYER_VISIBLE') {
    return true;
  }
  return playerVisible;
}
