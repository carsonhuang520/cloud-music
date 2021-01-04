import { getTopList, getRankingList } from '@/services/ranking'
import * as actionTypes from './constants'

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  list: res.list,
})

const changeRankingListAction = (list) => ({
  type: actionTypes.CHANGE_RANKING_LIST,
  list,
})

export const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index,
})

export const getTopListAction = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res))
    })
  }
}

export const getRankingListAction = (id) => {
  return (dispatch) => {
    getRankingList(id).then((res) => {
      dispatch(changeRankingListAction(res.playlist))
    })
  }
}
