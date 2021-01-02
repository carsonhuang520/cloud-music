import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'
import WDPlayerSongs from './c-cpns/player-songs'
import WDPlayerRelevant from './c-cpns/player-relevant'
import WDPlayerInfo from './c-cpns/player-info'

export default memo(function WDPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <WDPlayerInfo />
        </PlayerLeft>
        <PlayerRight>
          <WDPlayerSongs />
          <WDPlayerRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
