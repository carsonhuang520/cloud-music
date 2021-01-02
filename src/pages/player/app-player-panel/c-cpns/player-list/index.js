import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import { formatDate } from '@/utils/format-utils'

import { PlayListWrapper } from './style'

export default memo(function WDPlayerList() {
  const { playList, currentSongIndex } = useSelector((state) => {
    return {
      playList: state.getIn(['player', 'playList']),
      currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    }
  }, shallowEqual)

  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            className={classNames('play-item', {
              active: currentSongIndex === index,
            })}
            key={item.id}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatDate(item.dt, 'mm:ss')}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
})
