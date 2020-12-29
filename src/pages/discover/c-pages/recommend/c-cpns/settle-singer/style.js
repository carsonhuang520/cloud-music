import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      display: flex;
      height: 62px;
      width: 210px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      &:hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        padding-left: 14px;
        width: 148px;
        border: 1px solid #e9e9e9;
        border-left: none;

        .title {
          margin-top: 8px;
          color: #333333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 31px;
      font-weight: 700;
      color: #333333;
      border-radius: 4px;
      border: 1px solid #c3c3c3;
      background-color: #fafafa;
      text-decoration: none;

      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
`
