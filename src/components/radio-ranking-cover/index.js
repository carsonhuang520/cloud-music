import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { CoverWrapper } from './style'

export default memo(function WDRadioRankingCover(props) {
  const { info } = props

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2 className="title text_hover">{info.name}</h2>
        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left"></i>
          <span className="text_hover">{info.dj.nickname}</span>
        </div>
        <div className="count">
          <span className="phase">共{info.programCount}期</span>
          <span className="subscribe">订阅{info.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  )
})
