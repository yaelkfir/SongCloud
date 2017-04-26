
export default function playerControlsReduser (playerControls = 'none', action) {
  console.info('thus');
  if (action.type === 'TOGGLE_PLAYER_CONTROL') {
    return action.mode;
  }

  return playerControls;
}
