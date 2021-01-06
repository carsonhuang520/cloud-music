import request from './request'

export const getDjRadioCategory = () => {
  return request({
    url: '/dj/catelist',
  })
}
