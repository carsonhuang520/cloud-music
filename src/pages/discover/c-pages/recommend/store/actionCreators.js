import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
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

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
})

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

export const getTopListAction = (id, type) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      switch (type) {
        case 'upRanking':
          dispatch(changeUpRankingAction(res))
          break
        case 'newRanking':
          dispatch(changeNewRankingAction(res))
          break
        case 'originRanking':
          dispatch(changeOriginRankingAction(res))
          break
        default:
          break
      }
    })
  }
}
