import styled from 'styled-components'

export const CoverWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 48%;
  border-bottom: 1px solid #e7e7e7;

  img {
    width: 120px;
    height: 120px;
  }

  .info {
    margin-left: 20px;

    .title {
      color: #333333;
      font-size: 18px;
      font-weight: bold;
    }

    .nickname {
      margin-top: 15px;
      color: #333333;

      i.left {
        display: inline-block;
        position: relative;
        top: 2px;
        width: 14px;
        height: 15px;
        margin-right: 2px;
        background-position: -50px -300px;
      }

      span {
        margin-left: 5px;
      }
    }

    .count {
      color: #999999;
      margin-top: 5px;
      .subscribe {
        margin-left: 10px;
      }
    }
  }
`
