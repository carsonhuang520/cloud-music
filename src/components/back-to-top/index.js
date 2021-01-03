import React, { memo } from 'react'

import { scrollTo } from '@/utils/ui-helper'

import { BackToTopWrapper } from './style'

export default memo(function WDBackToTop() {
  const goToTop = (e) => {
    e.preventDefault()
    scrollTo(document.documentElement, 0, 300)
  }

  return (
    <BackToTopWrapper>
      <a
        className="sprite"
        href="todo"
        title="回到顶部"
        onClick={(e) => goToTop(e)}
      >
        回到顶部
      </a>
    </BackToTopWrapper>
  )
})
