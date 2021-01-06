import React, { memo } from 'react'

import WDRadioCategory from './c-cpns/radio-category'
import WDRadioRecommend from './c-cpns/radio-recommend'
import WDRadioRanking from './c-cpns/radio-ranking'
import { DjradioWrapper } from './style'

export default memo(function WDDjradio() {
  return (
    <DjradioWrapper className="wrap-v2">
      <WDRadioCategory />
      <WDRadioRecommend />
      <WDRadioRanking />
    </DjradioWrapper>
  )
})
