import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000000;
    font-family: simsun;
    font-weight: 700;
  }

  .item {
    display: flex;
    align-items: center;
    height: 62px;
    padding-left: 20px;
    cursor: pointer;

    &:hover {
      background-color: #f4f2f2;
    }

    &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 10px;

      .name {
        color: #000000;
      }

      .update {
        margin-top: 5px;
        color: #999999;
      }
    }
  }
`
