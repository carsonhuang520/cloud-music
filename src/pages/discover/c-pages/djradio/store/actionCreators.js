import * as actionTypes from './constants'

import {
  getDjRadioCategory,
  getDjRadioRecommend,
  getDjRadios,
} from '@/services/djradio'

const changeDjRadioCategoryAction = (categories) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories,
})

const changeDjRadioRecommendAction = (recommends) => ({
  type: actionTypes.CHANGE_RADIO_RECOMMEND,
  recommends,
})

const changeDjRadiosAction = (radios) => ({
  type: actionTypes.CHANGE_RADIOS,
  radios,
})

export const changeCurrentIdAciton = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  id,
})

export const changeTotalAciton = (total) => ({
  type: actionTypes.CHANGE_TOTAL,
  total,
})

export const changeCurrentPageAciton = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
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

export const getDjRadiosAction = (cateId, offset) => {
  return (dispatch) => {
    getDjRadios(cateId, 30, (offset - 1) * 30).then((res) => {
      dispatch(changeDjRadiosAction(res.djRadios))
      dispatch(changeTotalAciton(res.count))
    })
  }
}
