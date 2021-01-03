import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getSimiSongsAction } from '../../store/actionCreators'

import WDThemeHeaderPlayer from '@/components/theme-header-player'
import { RelevantWrapper } from './style'

export default memo(function WDPlayerRelevant() {
  const { simiSongs } = useSelector((state) => {
    return {
      simiSongs: state.getIn(['player', 'simiSongs']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSimiSongsAction())
  }, [dispatch])

  return (
    <RelevantWrapper>
      <WDThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {simiSongs.map((item) => {
          return (
            <div className="song-item" key={item.id}>
              <div className="info">
                <div className="title">
                  <a href="todo">{item.name}</a>
                </div>
                <div className="artist">
                  <a href="todo">{item.artists[0].name}</a>
                </div>
              </div>
              <div className="operate">
                <button className="item sprite_icon3 play"></button>
                <button className="item sprite_icon3 add"></button>
              </div>
            </div>
          )
        })}
      </div>
    </RelevantWrapper>
  )
})
