import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getSongDetailAction } from '../store/actionCreators'
import { getSizeImage, formatDate } from '@/utils/format-utils'

import { Slider } from 'antd'
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'

export default memo(function WDAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(['player', 'currentSong']),
    }
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTimem = formatDate(currentTime, 'mm:ss')

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar btn prev"></button>
          <button
            className="sprite_playbar btn play"
            onClick={() => setIsPlaying(!isPlaying)}
          ></button>
          <button className="sprite_playbar btn next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name text_hover">{currentSong.name}</span>
              <span className="singer-name text_hover">{singerName}</span>
            </div>
            <div className="progress">
              <Slider value={0} />
              <div className="time">
                <span className="now-time">{showCurrentTimem}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist">2</button>
          </div>
        </Operator>
      </div>
    </PlayerBarWrapper>
  )
})
