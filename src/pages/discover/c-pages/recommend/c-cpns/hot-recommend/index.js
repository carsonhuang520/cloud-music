import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actionCreators'

import WDSongsCover from '@/components/songs-cover'
import WDThemeHeaderRCM from '@/components/theme-header-rcm'
import { HotRecommendWrapper } from './style'

export default memo(function WDHotRecommend() {
  const { hotRecommends } = useSelector((state) => {
    return {
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendsAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <WDThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        path="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <WDSongsCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})
