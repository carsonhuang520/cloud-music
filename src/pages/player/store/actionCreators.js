import * as actionTypes from './contants'
import { getSongDetail } from '@/services/player'

const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song,
})

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}
