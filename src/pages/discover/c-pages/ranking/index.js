import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTopListAction } from './store/actionCreators'

import WDTopRanking from './c-cpns/top-ranking'
import WDRankingList from './c-cpns/ranking-list'
import WDRankingHeader from './c-cpns/ranking-header'
import { RankingWrapper, RankingLeft, RankingRight } from './style'

export default memo(function WDRanking() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <WDTopRanking />
      </RankingLeft>
      <RankingRight>
        <WDRankingHeader />
        <WDRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
