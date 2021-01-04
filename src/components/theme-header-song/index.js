import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { HeaderWrapper } from './style'

export default memo(function WDThemeHeaderSong() {
  const { rankingList } = useSelector((state) => {
    return {
      rankingList: state.getIn(['ranking', 'rankingList']),
    }
  }, shallowEqual)

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{rankingList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{rankingList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
