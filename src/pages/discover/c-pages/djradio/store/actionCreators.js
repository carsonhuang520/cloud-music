import * as actionTypes from './constants'

import { getDjRadioCategory } from '@/services/djradio'

const changeDjRadioCategoryAction = (categories) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories,
})

export const changeCurrentIdAciton = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  id,
})

export const getDjRadioCategoryAction = () => {
  return (dispatch) => {
    getDjRadioCategory().then((res) => {
      dispatch(changeDjRadioCategoryAction(res.categories))
    })
  }
}
