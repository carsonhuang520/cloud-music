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
