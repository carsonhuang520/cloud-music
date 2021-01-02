import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { scrollTo } from '@/utils/ui-helper.js'

import { LyricPanelWrapper } from './style'

export default memo(function WDLyricPanel() {
  const { lyricList, currentLyricIndex } = useSelector((state) => {
    return {
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }
  }, shallowEqual)

  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) {
      return
    }
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <LyricPanelWrapper ref={panelRef}>
      <div className="lyric-content">
        {lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lyric-item', {
                active: currentLyricIndex === index,
              })}
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </LyricPanelWrapper>
  )
})
