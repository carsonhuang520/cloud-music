import React, { memo } from 'react'

import WDPlayerHeader from './c-cpns/player-header'
import WDPlayerList from './c-cpns/player-list'
import WDLyricPanel from './c-cpns/lyric-panel'
import { PlayerPanelWrapper } from './style'

export default memo(function WDAppPlayerPanel() {
  return (
    <PlayerPanelWrapper>
      <WDPlayerHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <WDPlayerList />
        <WDLyricPanel />
      </div>
    </PlayerPanelWrapper>
  )
})
