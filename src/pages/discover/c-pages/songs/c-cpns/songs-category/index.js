import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { CategoryWrapper } from './style'

export default memo(function WDSongsCategory(props) {
  const { category } = useSelector((state) => {
    return {
      category: state.getIn(['songs', 'category']),
    }
  }, shallowEqual)

  const selectCategory = (name, e) => {
    if (e) {
      e.preventDefault()
    }
    props.onSelectCategory(name)
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <a
          className="link"
          href="todo"
          onClick={(e) => selectCategory('全部', e)}
        >
          全部风格
        </a>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl className={'item' + index} key={item.name}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem) => {
                  return (
                    <div key={sItem.name} className="item">
                      <span
                        className="link"
                        onClick={() => selectCategory(sItem.name)}
                      >
                        {sItem.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  )
                })}
              </dd>
            </dl>
          )
        })}
      </div>
    </CategoryWrapper>
  )
})
