import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumWrapper } from './style'

export default memo(function WDAlbumCover(props) {
  const { info, size, width, bgp } = props

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
        <a href="todo" className="cover sprite_cover" title={info.name}>
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
