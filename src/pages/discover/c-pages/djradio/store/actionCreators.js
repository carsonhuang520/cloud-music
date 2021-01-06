import * as actionTypes from './constants'

import { getDjRadioCategory, getDjRadioRecommend } from '@/services/djradio'

const changeDjRadioCategoryAction = (categories) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories,
})

const changeDjRadioRecommendAction = (recommends) => ({
  type: actionTypes.CHANGE_RADIO_RECOMMEND,
  recommends,
})

export const changeCurrentIdAciton = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  id,
})

export const getDjRadioCategoryAction = () => {
  return (dispatch) => {
    getDjRadioCategory().then((res) => {
      dispatch(changeDjRadioCategoryAction(res.categories))
      dispatch(changeCurrentIdAciton(res.categories[0].id))
    })
  }
}

export const getDjRadioRecommendAction = (type) => {
  return (dispatch) => {
    getDjRadioRecommend(type).then((res) => {
      dispatch(changeDjRadioRecommendAction(res.djRadios))
    })
  }
}
