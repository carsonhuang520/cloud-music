import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style'

export default memo(function WDSongsHeader() {
  const { currentCategory } = useSelector((state) => {
    return {
      currentCategory: state.getIn(['songs', 'currentCategory']),
    }
  }, shallowEqual)

  return (
    <SongsHeaderWrapper>
      <SongsHeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select">
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
      </SongsHeaderLeft>
      <SongsHeaderRight>
        <button className="hot text_hover">热门</button>
      </SongsHeaderRight>
    </SongsHeaderWrapper>
  )
})
