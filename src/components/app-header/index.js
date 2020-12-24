import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function WDAppHeader() {
  return (
    <div>
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">朋友</NavLink>
    </div>
  )
})