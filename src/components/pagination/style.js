import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  .pagination {
    margin: 30px 0;
    text-align: center;

    .control {
      width: 69px;
      height: 24px;
      line-height: 22px;
      text-align: center;
      border: 1px solid #cccccc;
      border-radius: 2px;
      margin: 0 5px;
      color: #333333;

      &:disabled {
        color: #999999;
      }
    }

    .ant-pagination-item {
      border: 1px solid #ccc !important;
      margin: 0 5px;
      border-radius: 3px;

      a {
        font-size: 12px;
      }

      &.ant-pagination-item-active {
        background-color: #c20c0c;
        border-color: #a2161b !important;
        a {
          color: #fff;
        }
      }

      &:hover:not(.ant-pagination-item-active) {
        border-color: #666666 !important;
        a {
          color: #333333;
        }
      }
    }

    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
      .ant-pagination-item-link-icon {
        color: #666666 !important;
      }
      &:hover {
        svg {
          color: #666666 !important;
        }
      }
    }
  }
`
