import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  categorySongs: {},
  currentCategory: '全部',
  category: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY_SONGS:
      return state.set('categorySongs', action.categorySongs)
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set('currentCategory', action.currentCategory)
    case actionTypes.CHANGE_CATEGORY:
      return state.set('category', action.category)
    default:
      return state
  }
}

export default reducer
