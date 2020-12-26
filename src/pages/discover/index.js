import React, { memo, useEffect } from 'react'

// import request from '@/services/request'
import { NavLink } from 'react-router-dom'
import { discoverMenu } from '@/common/local-data'
import { DiscoverWrapper, TopMenu } from './style'
import { renderRoutes } from 'react-router-config'

export default memo(function WDDiscover(props) {
  // useEffect(() => {
  //   request({ url: '/banner' }).then((res) => {
  //     console.log(res)
  //   })
  // }, [])

  const { route } = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
