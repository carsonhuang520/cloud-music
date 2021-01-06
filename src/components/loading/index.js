import React, { memo } from 'react'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { LoadingWrapper } from './style'

export default memo(function WDLoading() {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: '#c20c0c' }} spin />
  )

  return (
    <LoadingWrapper className="wrap-v2">
      <Spin indicator={antIcon} tip="加载中..." className="spin" />
    </LoadingWrapper>
  )
})
