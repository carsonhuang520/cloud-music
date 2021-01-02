const devBaseURL = 'http://106.52.75.202:9001'
const proBaseURL = 'http://106.52.75.202:9001'
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 20000
