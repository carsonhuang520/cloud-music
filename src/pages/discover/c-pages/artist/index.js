import React, { memo } from 'react'

import WDArtistCategory from './c-cpns/artist-category'
import WDArtistList from './c-cpns/artist-list'
import { ArtistWrapper } from './style'

export default memo(function WDArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <WDArtistCategory />
        <WDArtistList />
      </div>
    </ArtistWrapper>
  )
})
