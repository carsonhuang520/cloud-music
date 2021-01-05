import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store'
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store'
import { reducer as songsReducer } from '../pages/discover/c-pages/songs/store'
import { reducer as artistReducer } from '../pages/discover/c-pages/artist/store'
import { reducer as albumReducer } from '../pages/discover/c-pages/album/store'

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  artist: artistReducer,
  album: albumReducer
})

export default reducer
