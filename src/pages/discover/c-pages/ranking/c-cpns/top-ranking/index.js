import React, { memo, useEffect } from 'react'
import classNames from 'classnames'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  changeCurrentIndexAction,
  getRankingListAction,
} from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import { TopRankingWrapper } from './style'

export default memo(function WDTopRanking() {
  const { topList, currentIndex } = useSelector((state) => {
    return {
      topList: state.getIn(['ranking', 'topList']),
      currentIndex: state.getIn(['ranking', 'currentIndex']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const id = topList[currentIndex] && topList[currentIndex].id
    if (!id) {
      return
    }
    dispatch(getRankingListAction(id))
  }, [dispatch, currentIndex, topList])

  const handleItemClick = (index) => {
    dispatch(changeCurrentIndexAction(index))
    const id = topList[index].id
    dispatch(getRankingListAction(id))
  }
  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          )
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: index === currentIndex })}
              onClick={() => handleItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
})
