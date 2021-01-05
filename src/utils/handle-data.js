export const handleSongsCategory = (data) => {
  let categories = data.categories
  const categoryData = Object.entries(categories).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    }
  })
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item)
  }
  return categoryData
}

export const generateSingerAlpha = () => {
  let res = ['-1']
  let start = 'A'.charCodeAt(0)
  let end = 'Z'.charCodeAt(0)
  for (let i = start; i <= end; i++) {
    res.push(String.fromCharCode(i))
  }
  res.push('0')
  return res
}
