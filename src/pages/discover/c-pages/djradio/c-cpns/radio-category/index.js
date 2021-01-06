import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import {
  getDjRadioCategoryAction,
  changeCurrentIdAciton,
  changeCurrentPageAciton,
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

  const onClickItem = (id) => {
    dispatch(changeCurrentIdAciton(id))
    dispatch(changeCurrentPageAciton(1))
  }
  return (
    <RadioCategoryWrapper>
      <div className="category-list">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => onClickItem(item.id)}
              className={classNames('category-item', {
                active: item.id === currentId,
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
