import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import {
  getSongDetailAction,
  changePlaySongAction,
  changePlayListAction,
} from '@/pages/player/store'
import { formatDate } from '@/utils/format-utils'

import { PlayListWrapper } from './style'

export default memo(function WDPlayerList() {
  const { playList, currentSongIndex } = useSelector((state) => {
    return {
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const onClickSong = (item) => {
    dispatch(getSongDetailAction(item.id))
  }
  const onDeleteSong = (e, item, index) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    const newPlayList = playList.filter((e) => e.id !== item.id)
    if (currentSongIndex !== index) {
      dispatch(changePlayListAction(newPlayList))
    } else {
      dispatch(changePlayListAction(newPlayList))
      dispatch(changePlaySongAction(0))
    }
  }

  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            className={classNames('play-item', {
              active: currentSongIndex === index,
            })}
            key={item.id}
            onClick={() => onClickSong(item)}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <div className="operate">
                <span
                  className="item favor sprite_playlist"
                  title="收藏"
                ></span>
                <span
                  className="item share sprite_playlist"
                  title="分享"
                ></span>
                <span
                  className="item download sprite_playlist"
                  title="下载"
                ></span>
                <span
                  className="item delete sprite_playlist"
                  title="删除"
                  onClick={(e) => onDeleteSong(e, item, index)}
                ></span>
              </div>
              <span className="singer text-nowrap">{item.ar[0].name}</span>
              <span className="duration">{formatDate(item.dt, 'mm:ss')}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
})
