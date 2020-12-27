import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
} from '@/services/recommend'

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

const changeNewAlbumsAction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums.slice(0, 10),
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

export const getNewAlbumsAction = () => {
  return (dispatch) => {
    getNewAlbums().then((res) => {
      dispatch(changeNewAlbumsAction(res))
    })
  }
}
