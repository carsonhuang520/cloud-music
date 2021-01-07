import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { formatDate, getSizeImage } from '@/utils/format-utils'
import { changePlayListAction, getSongDetailAction } from '@/pages/player/store'

import WDThemeHeaderSong from '@/components/theme-header-song'
import { RankingListWrapper } from './style'

export default memo(function WDRankingList() {
  const { rankingList, playList } = useSelector((state) => {
    return {
      rankingList: state.getIn(['ranking', 'rankingList']),
      playList: state.getIn(['player', 'playList']),
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const tracks = rankingList.tracks || []

  const onAddSong = (e, item) => {
    e.preventDefault()
    dispatch(changePlayListAction([...playList, item]))
  }

  const onClickSong = (item) => {
    dispatch(getSongDetailAction(item.id))
  }

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
                      <span
                        className="play sprite_table"
                        onClick={() => onClickSong(item)}
                      ></span>
                      <span className="name text_hover">{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="duration">
                      {formatDate(item.dt, 'mm:ss')}
                    </span>
                    <div className="operate">
                      <a
                        href="/"
                        className="btn sprite_icon2"
                        title="添加到播放列表"
                        onClick={(e) => onAddSong(e, item)}
                      >
                        添加到列表
                      </a>
                      <span
                        className="item favor sprite_table"
                        title="收藏"
                      ></span>
                      <span
                        className="item share sprite_table"
                        title="分享"
                      ></span>
                      <span
                        className="item download sprite_table"
                        title="下载"
                      ></span>
                    </div>
                  </td>
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
