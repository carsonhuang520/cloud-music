import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import WDThemeHeaderNormal from '@/components/theme-header-normal'
import WDAlphaList from './c-cpns/alpha-list'
import WDArtistItem from './c-cpns/artist-item'
import { ArtistListWrapper } from './style'

export default memo(function WDArtistList() {
  const { currentType, artistList } = useSelector((state) => {
    return {
      currentType: state.getIn(['artist', 'currentType']),
      artistList: state.getIn(['artist', 'artistList']),
    }
  }, shallowEqual)

  return (
    <ArtistListWrapper>
      <WDThemeHeaderNormal title={currentType.name} />
      <WDAlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return <WDArtistItem key={item.id} info={item} index={index} />
        })}
      </div>
    </ArtistListWrapper>
  )
})
