import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { formatDate, getSizeImage } from '@/utils/format-utils'

import WDThemeHeaderSong from '@/components/theme-header-song'
import { RankingListWrapper } from './style'

export default memo(function WDRankingList() {
  const { rankingList } = useSelector((state) => {
    return {
      rankingList: state.getIn(['ranking', 'rankingList']),
    }
  }, shallowEqual)

  const tracks = rankingList.tracks || []

  return (
    <RankingListWrapper>
      <WDThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name text_hover">{item.name}</span>
                    </div>
                  </td>
                  <td className="duration">{formatDate(item.dt, 'mm:ss')}</td>
                  <td className="text_hover">{item.ar[0].name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})
