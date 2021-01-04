import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  getCategorySongsAction,
  getCategoryAction,
} from './store/actionCreators'

import WDSongsHeader from './c-cpns/songs-header'
import WDSongsList from './c-cpns/songs-list'
import { SongsWrapper } from './style'

export default memo(function WDSongs() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategoryAction())
    dispatch(getCategorySongsAction(1))
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <WDSongsHeader />
      <WDSongsList />
    </SongsWrapper>
  )
})
