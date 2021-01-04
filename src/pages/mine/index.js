import React, { memo } from 'react'

import { MineWrapper } from './style'

export default memo(function WDMine() {
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a href="/todo" className="login">
            立即登录
          </a>
        </div>
      </div>
    </MineWrapper>
  )
})
