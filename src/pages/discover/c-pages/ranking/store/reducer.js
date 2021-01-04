import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  rankingList: {},
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set('topList', action.list)
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', action.index)
    case actionTypes.CHANGE_RANKING_LIST:
      return state.set('rankingList', action.list)
    default:
      return state
  }
}

export default reducer
