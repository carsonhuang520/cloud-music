const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export const parseLyric = (lyricString) => {
  const lines = lyricString.split('\n')
  const lyricList = []
  for (let line of lines) {
    if (line) {
      const result = reg.exec(line)
      if (!result) {
        continue
      }
      const minute = result[1] * 60 * 1000
      const second = result[2] * 1000
      const millisecond =
        result[3].length === 3 ? result[3] * 1 : result[3] * 10
      const time = minute + second + millisecond
      const content = line.replace(reg, '').trim()
      const obj = { time, content }
      lyricList.push(obj)
    }
  }
  return lyricList
}
