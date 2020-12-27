import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends } from '@/services/recommend'

const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    banners: res.banners,
  }
}

const changeHotRecommendsAction = (res) => {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result,
  }
}

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendsAction = () => {
  return (dispatch) => {
    getHotRecommends().then((res) => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}
