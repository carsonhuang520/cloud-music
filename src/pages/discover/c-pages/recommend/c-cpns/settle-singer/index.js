import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSettleSingersAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

import WDThemeHeaderSmall from '@/components/theme-header-small'
import { SettleSingerWrapper } from './style'

export default memo(function WDSettleSinger() {
  const { settleSingers } = useSelector((state) => {
    return {
      settleSingers: state.getIn(['recommend', 'settleSingers']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSettleSingersAction(5))
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <WDThemeHeaderSmall title="入驻歌手" more="查看更多>" path="/discover/artist" />
      <div className="singer-list">
        {settleSingers.map((item) => {
          return (
            <a href="/todo" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join('') || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
