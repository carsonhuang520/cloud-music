import * as actionTypes from './constants'

import { getTopBanners } from '@/services/recommend'

const changeTopBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_TOP_BANNERS,
    banners: res.banners,
  }
}

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
