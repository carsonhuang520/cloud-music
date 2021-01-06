import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  categories: [],
  currentId: 0,
  recommends: [],
  radios: [],
  total: 0,
  currentPage: 1,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set('categories', action.categories)
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set('currentId', action.id)
    case actionTypes.CHANGE_RADIO_RECOMMEND:
      return state.set('recommends', action.recommends)
    case actionTypes.CHANGE_RADIOS:
      return state.set('radios', action.radios)
    case actionTypes.CHANGE_TOTAL:
      return state.set('total', action.total)
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set('currentPage', action.currentPage)
    default:
      return state
  }
}

export default reducer
