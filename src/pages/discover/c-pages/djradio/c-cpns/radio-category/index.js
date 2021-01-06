import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import {
  getDjRadioCategoryAction,
  changeCurrentIdAciton,
} from '../../store/actionCreators'

import { RadioCategoryWrapper, CategoryItemImage } from './style'

export default memo(function WDRadioCategory() {
  const { categories, currentId } = useSelector(
    (state) => ({
      categories: state.getIn(['radio', 'categories']),
      currentId: state.getIn(['radio', 'currentId']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDjRadioCategoryAction())
  }, [dispatch])

  return (
    <RadioCategoryWrapper>
      <div className="category-list">
        {categories.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => dispatch(changeCurrentIdAciton(index))}
              className={classNames('category-item', {
                active: index === currentId,
              })}
            >
              <CategoryItemImage
                className="image"
                imgUrl={item.picWebUrl}
              ></CategoryItemImage>
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </RadioCategoryWrapper>
  )
})
