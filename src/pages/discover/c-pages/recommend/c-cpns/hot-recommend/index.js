import React, { memo } from 'react'

import WDThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function WDHotRecommend() {
  return (
    <div>
      <WDThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
    </div>
  )
})
