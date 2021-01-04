import React, { memo } from 'react'

import { Pagination } from 'antd'
import { PaginationWrapper } from './style'

export default memo(function WDPagination(props) {
  const { total, currentPage, onPageChange, pageSize } = props

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button className="control prev">&lt;上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">下一页&gt;</button>
    }
    return originalElement
  }

  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        total={total}
        defaultCurrent={1}
        current={currentPage}
        showSizeChanger={false}
        onChange={onPageChange}
        pageSize={pageSize}
        itemRender={itemRender}
      />
    </PaginationWrapper>
  )
})
