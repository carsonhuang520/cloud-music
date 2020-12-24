import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

import WDAppHeader from '@/components/app-header'
import WDAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <WDAppHeader />
      {renderRoutes(routes)}
      <WDAppFooter />
    </HashRouter>
  )
})
