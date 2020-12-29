import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const WDThemeHeaderSmall = memo(function (props) {
  const { title, more } = props

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/more">{more}</a>
    </HeaderWrapper>
  )
})

WDThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
}

export default WDThemeHeaderSmall
