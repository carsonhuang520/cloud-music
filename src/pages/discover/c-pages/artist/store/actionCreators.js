import * as actionTypes from './constants'

export const changeCurrentAreaAction = (area) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  area,
})

export const changeCurrentTypeAction = (type) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type,
})
