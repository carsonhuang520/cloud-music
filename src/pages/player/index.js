import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function WDPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>hello</PlayerLeft>
        <PlayerRight>world</PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
