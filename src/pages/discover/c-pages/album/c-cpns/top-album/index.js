import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopAlbumAction } from '../../store/actionCreators'

import WDPagination from '@/components/pagination'
import WDAlbumCover from '@/components/album-cover'
import WDThemeHeaderNormal from '@/components/theme-header-normal'
import { TopAlbumWrapper } from './style'

export default memo(function WDTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)

  const { topAlbum, total } = useSelector(
    (state) => ({
      topAlbum: state.getIn(['album', 'topAlbum']),
      total: state.getIn(['album', 'total']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopAlbumAction(1))
  }, [dispatch])

  const onPageChange = (page) => {
    setCurrentPage(page)
    dispatch(getTopAlbumAction(page))
  }

  return (
    <TopAlbumWrapper>
      <WDThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {topAlbum.map((item) => {
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
      <WDPagination
        total={total}
        pageSize={35}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})
