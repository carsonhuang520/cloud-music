import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { getSimiPlaylistAction } from '../../store/actionCreators'

import WDThemeHeaderPlayer from '@/components/theme-header-player'
import { PlayerSongsWrapper } from './style'

export default memo(function WDPlayerSongs() {
  const { simiPlaylist } = useSelector((state) => {
    return {
      simiPlaylist: state.getIn(['player', 'simiPlaylist']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSimiPlaylistAction())
  }, [dispatch])

  return (
    <PlayerSongsWrapper>
      <WDThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {simiPlaylist.map((item) => {
          return (
            <div className="song-item" key={item.id}>
              <a className="image" href="/#">
                <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.name} />
              </a>
              <div className="info text-nowrap">
                <a className="name" href="todo">
                  {item.name}
                </a>
                <div className="author">
                  by{' '}
                  <a className="nickname" href="todo">
                    {item.creator.nickname}
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </PlayerSongsWrapper>
  )
})
