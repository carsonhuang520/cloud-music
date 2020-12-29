import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data'

import WDThemeHeaderSmall from '@/components/theme-header-small'
import { HotRadioWrapper } from './style'

export default memo(function WDHotRadio() {
  return (
    <HotRadioWrapper>
      <WDThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.name}>
              <a href="/todo" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name text_hover">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotRadioWrapper>
  )
})
