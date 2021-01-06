import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  categories: [],
  currentId: 0,
  recommends: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set('categories', action.categories)
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set('currentId', action.id)
    case actionTypes.CHANGE_RADIO_RECOMMEND:
      return state.set('recommends', action.recommends)
    default:
      return state
  }
}

export default reducer
