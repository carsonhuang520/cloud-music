import * as actionTypes from './contants'

import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'
import { getSongDetail, getLyric } from '@/services/player'

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

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
})

export const changePlaySongAction = (param) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])
    const playSequence = getState().getIn(['player', 'playSequence'])

    switch (playSequence) {
      case 1:
        let randomIndex = getRandomNumber(playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length)
        }
        currentSongIndex = randomIndex
        break
      default:
        let index = currentSongIndex + param
        if (index < 0) {
          index = playList.length - 1
        }
        if (index >= playList.length) {
          index = 0
        }
        currentSongIndex = index
        break
    }

    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeCurrentSongAction(playList[currentSongIndex]))
    dispatch(getLyricAction(playList[currentSongIndex].id))
  }
}

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
      dispatch(getLyricAction(song.id))
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
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyricList = parseLyric(res.lrc.lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
