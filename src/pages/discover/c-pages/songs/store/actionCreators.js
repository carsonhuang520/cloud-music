import * as actionTypes from './constants'

import { getCategorySongs } from '@/services/songs'

const changeCategorySongsAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res,
})

export const changeCurrentCategoryAction = (category) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: category,
})

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
