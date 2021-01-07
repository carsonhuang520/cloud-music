import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'

const WDThemeHeaderSmall = memo(function (props) {
  const { title, more, path } = props

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      {/* <a href="/more">{more}</a> */}
      {more && <NavLink to={path}>{more}</NavLink>}
    </HeaderWrapper>
  )
})

WDThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
}

export default WDThemeHeaderSmall
