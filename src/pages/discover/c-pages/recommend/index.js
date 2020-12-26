import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function WDRecommend(props) {
  const { topBanners, getBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return <div>WDRecommend: {topBanners.length}</div>
}

const mapStateToProps = (state) => {
  return {
    topBanners: state.recommend.topBanners,
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    getBanners: () => {
      dispacth(getTopBannerAction())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(WDRecommend))
