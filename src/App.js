import React, { memo, Suspense, useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import store from '@/store'
import routes from '@/router'

import WDLoading from '@/components/loading'
import WDAppHeader from '@/components/app-header'
import WDAppFooter from '@/components/app-footer'
import WDAppPlayerBar from '@/pages/player/app-player-bar'
import WDBackToTop from '@/components/back-to-top'

export default memo(function App() {
  const [backVisible, setBackVisible] = useState(false)

  useEffect(() => {
    const helper = () => {
      if (document.documentElement.scrollTop >= 160) {
        setBackVisible(true)
      } else {
        setBackVisible(false)
      }
    }
    document.addEventListener('scroll', helper)

    return () => {
      document.removeEventListener('scroll', helper)
    }
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <WDAppHeader />
        <Suspense fallback={<WDLoading />}>{renderRoutes(routes)}</Suspense>
        <WDAppFooter />
        <WDAppPlayerBar />
        {backVisible && <WDBackToTop />}
      </BrowserRouter>
    </Provider>
  )
})
