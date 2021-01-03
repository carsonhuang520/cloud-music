import React, { memo } from 'react'

import { WineWrapper } from './style'

export default memo(function WDMine() {
  return (
    <WineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a href="/todo" className="login">
            立即登录
          </a>
        </div>
      </div>
    </WineWrapper>
  )
})
