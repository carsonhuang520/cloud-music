import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  currentType: 1,
  currentArea: -1,
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set('currentType', action.currentType)
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set('currentArea', action.area)
    default:
      return state
  }
}

export default reducer
