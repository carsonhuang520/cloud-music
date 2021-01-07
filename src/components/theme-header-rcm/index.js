import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

const WDThemeHeaderRCM = memo(function (props) {
  const { title, keywords, path } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                {index !== keywords.length - 1 && (
                  <span className="divider">|</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        {/* <a href="todo">更多</a> */}
        <NavLink to={path}>更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

WDThemeHeaderRCM.propType = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
}

WDThemeHeaderRCM.defaultProps = {
  keywords: [],
}

export default WDThemeHeaderRCM
