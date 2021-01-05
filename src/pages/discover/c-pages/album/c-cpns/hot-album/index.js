import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotAlbumAction } from '../../store/actionCreators'

import WDThemeHeaderNormal from '@/components/theme-header-normal'
import WDAlbumCover from '@/components/album-cover'
import { HotAlbumWrapper } from './style'

export default memo(function WDHotAlbum() {
  const { hotAlbum } = useSelector(
    (state) => ({
      hotAlbum: state.getIn(['album', 'hotAlbum']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotAlbumAction())
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <WDThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {hotAlbum.slice(0, 10).map((item) => {
          return (
            <WDAlbumCover
              key={item.id}
              info={item}
              size={130}
              width={153}
              bgp="-845px"
            />
          )
        })}
      </div>
    </HotAlbumWrapper>
  )
})
