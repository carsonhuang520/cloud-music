import React, { memo } from 'react'

import { OperationBarWrapper } from './style'

export default memo(function WDSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props

  return (
    <OperationBarWrapper>
      <span className="play">
        <a className="play-icon sprite_button" href="todo">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a className="add-icon sprite_button" href="/todo">
          +
        </a>
      </span>
      <a className="item sprite_button" href="todo">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a className="item sprite_button" href="todo">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a className="item sprite_button" href="todo">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a className="item sprite_button" href="todo">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
