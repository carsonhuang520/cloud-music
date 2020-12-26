import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background: #c20c0c;
  }
`

export const TopMenu = styled.div`
  display: flex;
  /* align-items: center; */
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #ffffff;

      &:hover,
      &.active {
        text-decoration: none;
        border-radius: 10px;
        background: #9b0909;
      }
    }
  }
`
