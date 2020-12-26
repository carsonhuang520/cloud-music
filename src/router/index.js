import React from 'react'
import { Redirect } from 'react-router-dom'

import WDDiscover from '@/pages/discover'
import WDArtist from '@/pages/discover/c-pages/artist'
import WDRecommend from '@/pages/discover/c-pages/recommend'
import WDSongs from '@/pages/discover/c-pages/songs'
import WDAlbum from '@/pages/discover/c-pages/album'
import WDRanking from '@/pages/discover/c-pages/ranking'
import WDDjradio from '@/pages/discover/c-pages/djradio'

import WDMine from '@/pages/mine'
import WDFriend from '@/pages/friend'

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
