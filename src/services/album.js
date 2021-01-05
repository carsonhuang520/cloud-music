import request from './request'

export const getHotAlbums = () => {
  return request({
    url: '/album/newest',
  })
}

export const getTopAlbums = (limit, offset) => {
  return request({
    url: '/album/new',
    params: {
      limit,
      offset,
    },
  })
}
