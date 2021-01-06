import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  changeCurrentPageAciton,
  getDjRadiosAction,
} from '../../store/actionCreators'

import WDThemeHeaderNormal from '@/components/theme-header-normal'
import WDRadioRankingCover from '@/components/radio-ranking-cover'
import WDPagination from '@/components/pagination'
import { RadioRankingWrapper } from './style'

export default memo(function WDRadioRanking() {
  // const [currentPage, setCurrentPage] = useState(1)

  const { currentId, radios, total, currentPage } = useSelector(
    (state) => ({
      currentId: state.getIn(['radio', 'currentId']),
      radios: state.getIn(['radio', 'radios']),
      total: state.getIn(['radio', 'total']),
      currentPage: state.getIn(['radio', 'currentPage']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    if (currentId === 0) {
      return
    }
    dispatch(getDjRadiosAction(currentId, 1))
  }, [dispatch, currentId])

  const onPageChange = (page) => {
    // setCurrentPage(page)
    dispatch(changeCurrentPageAciton(page))
    dispatch(getDjRadiosAction(currentId, page))
  }

  return (
    <RadioRankingWrapper>
      <WDThemeHeaderNormal title="电台排行榜" />
      <div className="ranking-list">
        {radios.map((item) => {
          return <WDRadioRankingCover info={item} key={item.id} />
        })}
      </div>
      <WDPagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RadioRankingWrapper>
  )
})
