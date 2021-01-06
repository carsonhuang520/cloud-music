import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getDjRadioRecommendAction } from '../../store/actionCreators'

import WDRadioRecommendCover from '@/components/radio-recommend-cover'
import WDThemeHeaderNormal from '@/components/theme-header-normal'
import { RadioRecommendWrapper } from './style'

export default memo(function WDRadioRecommend() {
  const { currentId, recommends } = useSelector(
    (state) => ({
      currentId: state.getIn(['radio', 'currentId']),
      recommends: state.getIn(['radio', 'recommends']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentId === 0) {
      return
    }
    dispatch(getDjRadioRecommendAction(currentId))
  }, [dispatch, currentId])

  return (
    <RadioRecommendWrapper>
      <WDThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {recommends.slice(0, 5).map((item) => {
          return <WDRadioRecommendCover info={item} key={item.id} />
        })}
      </div>
    </RadioRecommendWrapper>
  )
})
