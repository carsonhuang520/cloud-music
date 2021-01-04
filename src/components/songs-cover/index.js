import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-utils'

import { SongsCoverWrapper } from './style'

export default memo(function WDSongsCover(props) {
  const { info, right } = props
  return (
    <SongsCoverWrapper right={right}>
      <div className="cover-top">
        <img
          src={getSizeImage(info.picUrl || info.coverImgUrl, 140)}
          alt={info.name}
        />
        <a className="cover sprite_cover" href="todo" title={info.name}>
          {info.name}
        </a>
        <div className="info sprite_cover">
          <span>
            <i className="sprite_icon erji"></i>
            {getCount(info.playCount)}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">
        by <span>{info.copywriter || info.creator.nickname}</span>
      </div>
    </SongsCoverWrapper>
  )
})
