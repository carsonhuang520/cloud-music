import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { CoverWrapper } from './style'

export default memo(function WDRadioRecommendCover(props) {
  const { info } = props

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="name">
        {info.name}
      </a>
      <p>{info.rcmdtext}</p>
    </CoverWrapper>
  )
})
