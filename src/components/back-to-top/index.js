import React, { memo } from 'react'

import { BackToTopWrapper } from './style'

export default memo(function WDBackToTop() {
  const goToTop = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
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
