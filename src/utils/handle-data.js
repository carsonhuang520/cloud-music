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
