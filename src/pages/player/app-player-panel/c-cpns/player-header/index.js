import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function WDPlayerHeader() {
  const { playList, currentSong } = useSelector((state) => {
    return {
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }
  }, shallowEqual)

  return (
    <PlayerWrapper>
      <PlayerLeft>
        <h4>播放列表({playList.length})</h4>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <span className="line">|</span>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </PlayerLeft>
      <PlayerRight>{currentSong.name}</PlayerRight>
    </PlayerWrapper>
  )
})
