import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import WDPlayerHeader from './c-cpns/player-header'
import WDPlayerList from './c-cpns/player-list'
import WDLyricPanel from './c-cpns/lyric-panel'
import { PlayerPanelWrapper } from './style'

export default memo(function WDAppPlayerPanel() {
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )

  return (
    <PlayerPanelWrapper>
      <WDPlayerHeader />
      <div className="main">
        <img
          className="image"
          src={currentSong.al && currentSong.al.picUrl}
          alt=""
        />
        <WDPlayerList />
        <WDLyricPanel />
      </div>
    </PlayerPanelWrapper>
  )
})
