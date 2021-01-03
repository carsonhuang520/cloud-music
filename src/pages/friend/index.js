import React, { memo } from 'react'

import { FriendWrapper } from './style'

export default memo(function WDFriend() {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a href="/todo" className="login">
            立即登录
          </a>
        </div>
      </div>
    </FriendWrapper>
  )
})
