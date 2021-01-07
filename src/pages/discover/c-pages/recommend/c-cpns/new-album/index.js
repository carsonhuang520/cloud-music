import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import WDAlbumCover from '@/components/album-cover'
import WDThemeHeaderRCM from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'

export default memo(function WDNewAlbum() {
  const { newAlbums } = useSelector((state) => {
    return {
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])
  return (
    <AlbumWrapper>
      <WDThemeHeaderRCM title="新碟上架" path="/discover/album" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((e) => {
                    return (
                      <WDAlbumCover
                        key={e.id}
                        info={e}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})
