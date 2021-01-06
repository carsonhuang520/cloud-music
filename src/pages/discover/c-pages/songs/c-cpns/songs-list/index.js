import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import {
  changeCurrentPageAction,
  getCategorySongsAction,
} from '../../store/actionCreators'
import { PER_PAGE_NUMBER } from '../../store/constants'
import WDPagination from '@/components/pagination'
import WDSongsCover from '@/components/songs-cover'
import { SongsListWrapper } from './style'

export default memo(function WDSongsList() {
  const { categorySongs, currentPage } = useSelector((state) => {
    return {
      categorySongs: state.getIn(['songs', 'categorySongs']),
      currentPage: state.getIn(['songs', 'currentPage']),
    }
  }, shallowEqual)

  const songsList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  const dispatch = useDispatch()

  const onPageChange = (val) => {
    dispatch(changeCurrentPageAction(val))
    dispatch(getCategorySongsAction(val))
  }

  return (
    <SongsListWrapper>
      <div className="songs-list">
        {songsList.map((item) => {
          return <WDSongsCover info={item} key={item.id} right="30px" />
        })}
      </div>
      <WDPagination
        total={total}
        pageSize={PER_PAGE_NUMBER}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </SongsListWrapper>
  )
})
