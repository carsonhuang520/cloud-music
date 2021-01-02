import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require('@/assets/img/playpanel_bg.png').default}) 0 0;
`

export const PlayerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 10px 0 25px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: #e2e2e2;
  }

  .operator {
    color: #cccccc;

    button {
      background-color: transparent;
      color: #cccccc;

      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        position: relative;
        top: 4px;
        right: 2px;
        margin-right: 6px;
      }

      .favor {
        background-position: -24px 0;
      }

      .remove {
        width: 13px;
        background-position: -51px 0;
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;

        .favor {
          background-position: -24px -20px;
        }

        .remove {
          background-position: -51px -20px;
        }
      }
    }

    .line {
      margin: 0 2px;
      color: #646464;
    }
  }
`

export const PlayerRight = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
`
