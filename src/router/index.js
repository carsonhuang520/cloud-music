import WDDiscover from '@/pages/discover'
import WDMine from '@/pages/mine'
import WDFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    component: WDDiscover,
  },
  {
    path: '/discover',
    component: WDDiscover,
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
