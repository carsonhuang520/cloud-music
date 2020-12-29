import React, { memo } from 'react'

import WDTopBanner from './c-cpns/top-banner'
import WDHotRecommend from './c-cpns/hot-recommend'
import WDNewAlbum from './c-cpns/new-album'
import WDRecomendRanking from './c-cpns/recommend-ranking'
import WDUserLogin from './c-cpns/user-login'
import WDSettleSinger from './c-cpns/settle-singer'
import WDHotRadio from './c-cpns/hot-radio'
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
          <WDRecomendRanking />
        </RecommendLeft>
        <RecommendRight>
          <WDUserLogin />
          <WDSettleSinger />
          <WDHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(WDRecommend)
