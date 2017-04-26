
export default function currentAudioPlayerMode (audioPlayerMode = 'none', action) {

  if (action.type === 'SET_AUDIO_PLAYER_MODE') {
    return action.mode;
  }

  return audioPlayerMode;
}
