import request from './request'

export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

export function getHotRecommends() {
  return request({
    url: '/personalized?limit=8',
  })
}

export function getNewAlbums() {
  return request({
    url: '/album/newest',
  })
}

export function getTopList(id) {
  return request({
    url: `/playlist/detail?id=${id}`,
  })
}
