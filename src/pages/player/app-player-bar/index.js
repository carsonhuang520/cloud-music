import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  getSongDetailAction,
  changePlaySequenceAction,
  changePlaySongAction,
  changeCurrentLyricIndexAction,
} from '../store/actionCreators'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import { Slider, message } from 'antd'
import WDAppPlayerPanel from '../app-player-panel'
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function WDAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showPanel, setShowPanel] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  const [volume, setVolume] = useState(0)

  const {
    currentSong,
    playSequence,
    playList,
    lyricList,
    currentLyricIndex,
  } = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
      playSequence: state.getIn(['player', 'playSequence']),
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true)
      })
      .catch((error) => {
        setIsPlaying(false)
      })
  }, [currentSong])

  const audioRef = useRef()
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTimem = formatDate(currentTime, 'mm:ss')

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / duration) * 100)
    }

    updateLyric(e.target.currentTime)
  }

  const updateLyric = (currentTime) => {
    let i = 0
    for (; i < lyricList.length; i++) {
      if (currentTime * 1000 < lyricList[i].time) {
        break
      }
    }

    const finalIndex = i - 1
    if (currentLyricIndex !== finalIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex))
      const tempLyric = lyricList[finalIndex]
      if (tempLyric && tempLyric.content !== '') {
        message.open({
          content: tempLyric.content,
          key: 'lyric',
          duration: 0,
          className: 'lyric-message',
        })
      }
    }
  }

  const timeEnded = () => {
    if (playSequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changePlaySongAction(1))
    }
  }

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true)
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)
      setProgress(value)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)
      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )

  const volumeChange = (value) => {
    setVolume(value)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            onClick={() => dispatch(changePlaySongAction(-1))}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={() => playMusic()}
          ></button>
          <button
            className="sprite_playbar btn next"
            onClick={() => dispatch(changePlaySongAction(1))}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name text_hover">{currentSong.name}</span>
              <span className="singer-name text_hover">{singerName}</span>
            </div>
            <div className="progress">
              <Slider
                tipFormatter={(value) =>
                  formatDate((value / 100) * duration, 'mm:ss')
                }
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTimem}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={playSequence} isMute={volume === 0}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            {showVolume && (
              <div className="volume-control sprite_playbar">
                <Slider vertical value={volume} onChange={volumeChange} />
              </div>
            )}
            <button
              className="sprite_playbar btn volume"
              onClick={() => setShowVolume(!showVolume)}
            ></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) =>
                dispatch(changePlaySequenceAction(playSequence + 1))
              }
            ></button>
            <button
              className="sprite_playbar btn playlist"
              onClick={() => setShowPanel(!showPanel)}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      {showPanel && <WDAppPlayerPanel />}
    </PlayerBarWrapper>
  )
})
