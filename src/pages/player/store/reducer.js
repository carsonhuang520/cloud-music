import { Map } from 'immutable'
import * as actionTypes from './contants'

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  playSequence: 0,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.song)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index)
    case actionTypes.CHANGE_PLAYLIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.playSequence)
    default:
      return state
  }
}

export default reducer
