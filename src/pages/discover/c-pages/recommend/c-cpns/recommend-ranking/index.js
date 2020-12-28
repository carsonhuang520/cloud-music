import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import WDThemeHeaderRCM from '@/components/theme-header-rcm'
import WDTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function WDRecomendRanking() {
  const state = useSelector((state) => {
    return {
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(19723756, 'upRanking'))
    dispatch(getTopListAction(3779629, 'newRanking'))
    dispatch(getTopListAction(2884035, 'originRanking'))
  }, [dispatch])
  return (
    <RankingWrapper>
      <WDThemeHeaderRCM title="榜单" />
      <div className="tops">
        <WDTopRanking info={state.upRanking} />
        <WDTopRanking info={state.newRanking} />
        <WDTopRanking info={state.originRanking} />
      </div>
    </RankingWrapper>
  )
})
