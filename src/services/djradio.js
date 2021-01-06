import request from './request'

export const getDjRadioCategory = () => {
  return request({
    url: '/dj/catelist',
  })
}

export const getDjRadioRecommend = (type) => {
  return request({
    url: '/dj/recommend/type',
    params: {
      type,
    },
  })
}

export const getDjRadios = (cateId, limit, offset) => {
  return request({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset,
    },
  })
}
