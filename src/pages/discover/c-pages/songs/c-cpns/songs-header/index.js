import React, { memo, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import {
  changeCurrentCategoryAction,
  getCategorySongsAction,
} from '../../store/actionCreators'

import WDSongsCategory from '../songs-category'
import { SongsHeaderWrapper, SongsHeaderLeft, SongsHeaderRight } from './style'

export default memo(function WDSongsHeader() {
  const [showCategory, setShowCategory] = useState(false)

  const { currentCategory } = useSelector((state) => {
    return {
      currentCategory: state.getIn(['songs', 'currentCategory']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const selectCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name))
    dispatch(getCategorySongsAction(1))
    setShowCategory(false)
  }

  return (
    <SongsHeaderWrapper>
      <SongsHeaderLeft>
        <span className="title">{currentCategory}</span>
        <button
          className="select"
          onClick={() => setShowCategory(!showCategory)}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory && <WDSongsCategory onSelectCategory={selectCategory} />}
      </SongsHeaderLeft>
      <SongsHeaderRight>
        <button className="hot text_hover">热门</button>
      </SongsHeaderRight>
    </SongsHeaderWrapper>
  )
})
