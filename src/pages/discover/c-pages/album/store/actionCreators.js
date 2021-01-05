import * as actionTypes from './constants'

import { getHotAlbums, getTopAlbums } from '@/services/album'

const changeHotAlbumAction = (hotAlbum) => ({
  type: actionTypes.CHANGE_HOT_ALBUM,
  hotAlbum,
})

const changeTopAlbumAction = (topAlbum) => ({
  type: actionTypes.CHANGE_TOP_ALBUM,
  topAlbum,
})

export const changeTotal = (total) => ({
  type: actionTypes.CHANGE_TOTAL,
  total,
})

export const getHotAlbumAction = () => {
  return (dispatch) => {
    getHotAlbums().then((res) => {
      dispatch(changeHotAlbumAction(res.albums))
    })
  }
}

export const getTopAlbumAction = (page) => {
  return (dispatch) => {
    getTopAlbums(35, (page - 1) * 35).then((res) => {
      dispatch(changeTopAlbumAction(res.albums))
      dispatch(changeTotal(res.total))
    })
  }
}
