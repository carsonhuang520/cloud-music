import * as actionTypes from './contants'
import { getSongDetail } from '@/services/player'

const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song,
})

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAYLIST,
  playList,
})

export const changePlaySequenceAction = (playSequence) => {
  if (playSequence > 2) {
    playSequence = 0
  }
  return {
    type: actionTypes.CHANGE_PLAY_SEQUENCE,
    playSequence,
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex((item) => item.id === ids)
    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index))
      const song = playList[index]
      dispatch(changeCurrentSongAction(song))
    } else {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0]
        if (!song) {
          return
        }
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      })
    }
  }
}

// export const changePlayListAction = () => {}
