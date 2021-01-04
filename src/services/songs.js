import request from './request'

export const getCategorySongs = (cat = '全部', offset = 0, limit = 35) => {
  return request({
    url: '/top/playlist',
    params: {
      cat,
      offset,
      limit,
    },
  })
}
