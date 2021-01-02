import request from './request'

export const getSongDetail = (ids) => {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

export const getLyric = (id) => {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  })
}

export const getSimiPlaylist = (id) => {
  return request({
    url: '/simi/playlist',
    params: {
      id,
    },
  })
}

export const getSimiSongs = (id) => {
  return request({
    url: `/simi/song?id=${id}`,
  })
}
