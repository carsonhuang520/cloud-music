import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'

// import WDDiscover from '@/pages/discover'
// import WDArtist from '@/pages/discover/c-pages/artist'
// import WDRecommend from '@/pages/discover/c-pages/recommend'
// import WDSongs from '@/pages/discover/c-pages/songs'
// import WDAlbum from '@/pages/discover/c-pages/album'
// import WDRanking from '@/pages/discover/c-pages/ranking'
// import WDDjradio from '@/pages/discover/c-pages/djradio'
// import WDPlayer from '@/pages/player'

// import WDMine from '@/pages/mine'
// import WDFriend from '@/pages/friend'

const WDDiscover = lazy(() => import('@/pages/discover'))
const WDArtist = lazy(() => import('@/pages/discover/c-pages/artist'))
const WDRecommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const WDSongs = lazy(() => import('@/pages/discover/c-pages/songs'))
const WDAlbum = lazy(() => import('@/pages/discover/c-pages/album'))
const WDRanking = lazy(() => import('@/pages/discover/c-pages/ranking'))
const WDDjradio = lazy(() => import('@/pages/discover/c-pages/djradio'))
const WDPlayer = lazy(() => import('@/pages/player'))
const WDMine = lazy(() => import('@/pages/mine'))
const WDFriend = lazy(() => import('@/pages/friend'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: WDDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: WDRecommend,
      },
      {
        path: '/discover/ranking',
        component: WDRanking,
      },
      {
        path: '/discover/songs',
        component: WDSongs,
      },
      {
        path: '/discover/djradio',
        component: WDDjradio,
      },
      {
        path: '/discover/artist',
        component: WDArtist,
      },
      {
        path: '/discover/album',
        component: WDAlbum,
      },
      {
        path: '/discover/player',
        component: WDPlayer,
      },
    ],
  },
  {
    path: '/mine',
    component: WDMine,
  },
  {
    path: '/friend',
    component: WDFriend,
  },
]

export default routes
