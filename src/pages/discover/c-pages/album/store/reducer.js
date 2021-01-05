import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  hotAlbum: [],
  topAlbum: [],
  total: 0,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM:
      return state.set('hotAlbum', action.hotAlbum)
    case actionTypes.CHANGE_TOP_ALBUM:
      return state.set('topAlbum', action.topAlbum)
    case actionTypes.CHANGE_TOTAL:
      return state.set('total', action.total)
    default:
      return state
  }
}

export default reducer
