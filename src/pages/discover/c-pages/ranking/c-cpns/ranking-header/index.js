import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { formatDate } from '@/utils/format-utils'

import WDSongOperationBar from '@/components/song-operation-bar'
import { RankingHeaderWrapper } from './style'

export default memo(function WDRankingHeader() {
  const { rankingList, topList, currentIndex } = useSelector((state) => {
    return {
      rankingList: state.getIn(['ranking', 'rankingList']),
      topList: state.getIn(['ranking', 'topList']),
      currentIndex: state.getIn(['ranking', 'currentIndex']),
    }
  }, shallowEqual)

  const update = topList[currentIndex] && topList[currentIndex].updateFrequency

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={rankingList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{rankingList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <span>
            最近更新：{formatDate(rankingList.updateTime, 'MM月dd日')}
          </span>
          <span className="update">({update})</span>
        </div>
        <WDSongOperationBar
          favorTitle={`(${rankingList.subscribedCount})`}
          shareTitle={`(${rankingList.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${rankingList.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
})
