import React, { memo } from 'react'

import WDHotAlbum from './c-cpns/hot-album'
import WDTopAlbum from './c-cpns/top-album'
import { AlbumWrapper } from './style'

export default memo(function WDAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <WDHotAlbum />
      <WDTopAlbum />
    </AlbumWrapper>
  )
})
