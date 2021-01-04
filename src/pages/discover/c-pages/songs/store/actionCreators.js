import * as actionTypes from './constants'

import { handleSongsCategory } from '@/utils/handle-data.js'
import { getCategorySongs, getCategory } from '@/services/songs'

const changeCategorySongsAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res,
})

const changeCategoryAction = (data) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: data,
})

export const changeCurrentCategoryAction = (category) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: category,
})

export const getCategoryAction = () => {
  return (dispatch) => {
    getCategory().then((res) => {
      const categoryData = handleSongsCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const getCategorySongsAction = (page) => {
  return (dispatch, getState) => {
    const category = getState().getIn(['songs', 'currentCategory'])
    getCategorySongs(category, (page - 1) * actionTypes.PER_PAGE_NUMBER).then(
      (res) => {
        dispatch(changeCategorySongsAction(res))
      }
    )
  }
}
