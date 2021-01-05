import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { artistCategories } from '@/common/local-data'
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
} from '../../store/actionCreators'

import { ArtistCategoryWrapper, ArtistCategoryItem } from './style'

export default memo(function WDArtistCategory() {
  const { currentType, currentArea } = useSelector((state) => {
    return {
      currentArea: state.getIn(['artist', 'currentArea']),
      currentType: state.getIn(['artist', 'currentType']),
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const onSelectCategory = (area, type) => {
    dispatch(changeCurrentAreaAction(area))
    dispatch(changeCurrentTypeAction(type))
  }

  const renderArtist = (artists, area) => {
    return (
      <div>
        {artists.map((item) => {
          const isActive = item.type === currentType && area === currentArea
          return (
            <ArtistCategoryItem
              key={item.name}
              className={classNames({ active: isActive })}
            >
              <span onClick={() => onSelectCategory(area, item.type)}>
                {item.name}
              </span>
            </ArtistCategoryItem>
          )
        })}
      </div>
    )
  }

  return (
    <ArtistCategoryWrapper>
      {artistCategories.map((item) => {
        return (
          <div className="section" key={item.area}>
            <h2 className="title">{item.title}</h2>
            {renderArtist(item.artists, item.area)}
          </div>
        )
      })}
    </ArtistCategoryWrapper>
  )
})
