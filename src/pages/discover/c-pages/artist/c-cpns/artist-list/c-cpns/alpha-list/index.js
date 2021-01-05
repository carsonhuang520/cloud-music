import React, { memo, useState, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { getArtistListAction } from '../../../../store/actionCreators'
import { generateSingerAlpha } from '@/utils/handle-data'

import { AlphaListWrapper } from './style'

export default memo(function WDAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState('-1')

  const { currentArea, currentType } = useSelector(
    (state) => ({
      currentArea: state.getIn(['artist', 'currentArea']),
      currentType: state.getIn(['artist', 'currentType']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    setCurrentAlpha('-1')
  }, [currentType, currentArea])
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha))
  }, [dispatch, currentAlpha, currentType, currentArea])

  const onClickAlpha = (item) => {
    if (item === '其他') {
      item = '0'
    }
    if (item === '热门') {
      item = '-1'
    }
    setCurrentAlpha(item)
  }

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {currentArea !== -1 &&
        generateSingerAlpha().map((item) => {
          const isActive = currentAlpha === item
          if (item === '0') {
            item = '其他'
          }
          if (item === '-1') {
            item = '热门'
          }
          return (
            <div
              key={item}
              className={classNames('item', { active: isActive })}
            >
              <span onClick={() => onClickAlpha(item)}>
                {item.toUpperCase()}
              </span>
            </div>
          )
        })}
    </AlphaListWrapper>
  )
})
