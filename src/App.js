import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import store from '@/store'
import routes from '@/router'

import WDAppHeader from '@/components/app-header'
import WDAppFooter from '@/components/app-footer'
import WDAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WDAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <WDAppFooter />
        <WDAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
