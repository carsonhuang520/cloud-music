import React, { memo } from 'react'

import WDTopBanner from './c-cpns/top-banner'
import WDHotRecommend from './c-cpns/hot-recommend'
import WDNewAlbum from './c-cpns/new-album'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'

function WDRecommend() {
  return (
    <RecommendWrapper>
      <WDTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <WDHotRecommend />
          <WDNewAlbum />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(WDRecommend)
