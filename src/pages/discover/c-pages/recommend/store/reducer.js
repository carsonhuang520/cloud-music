import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.banners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.recommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums)
    default:
      return state
  }
}

export default reducer
