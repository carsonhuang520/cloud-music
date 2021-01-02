import styled from 'styled-components'

export const OperationBarWrapper = styled.div`
  display: flex;
  align-items: center;

  .play {
    display: flex;
    align-items: center;
    margin-right: 5px;

    .play-icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      background-position: right -428px;

      &:hover {
        background-position: right -510px;
      }

      .play {
        display: flex;
        align-items: center;
        padding: 0 7px 0 8px;
        color: #ffffff;
        background-position: 0 -387px;

        &:hover {
          background-position: 0 -469px;

          i {
            background-position: -28px -1622px;
          }
        }

        i {
          display: inline-block;
          width: 20px;
          height: 18px;
          margin: -2px 2px 0;
          background-position: 0 -1622px;
        }
      }
    }

    .add-icon {
      display: inline-block;
      width: 31px;
      height: 31px;
      margin-left: -3px;
      padding-right: 0;
      background-position: 0 -1588px;
      text-indent: -9999px;

      &:hover {
        background-position: -40px -1588px;
      }
    }
  }

  .item {
    display: inline-block;
    height: 31px;
    margin-right: 6px;
    padding-right: 5px;
    background-position: right -1020px;
    color: #333333;

    &:hover {
      background-position: right -1106px;
    }

    .icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      padding: 0 7px 0 28px;
      font-family: simsun;
    }

    .favor-icon {
      background-position: 0 -977px;

      &:hover {
        background-position: 0 -1063px;
      }
    }

    .share-icon {
      background-position: 0 -1225px;

      &:hover {
        background-position: 0 -1268px;
      }
    }

    .download-icon {
      background-position: 0 -2761px;

      &:hover {
        background-position: 0 -2805px;
      }
    }

    .comment-icon {
      background-position: 0 -1465px;

      &:hover {
        background-position: 0 -1508px;
      }
    }
  }
`
