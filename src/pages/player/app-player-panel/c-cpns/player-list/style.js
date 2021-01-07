import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #cccccc;
    position: relative;
    height: 28px;
    line-height: 28px;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      background-color: rgba(0, 0, 0, 0.3);

      .right {
        .operate {
          display: flex;
        }
      }
    }

    &.active {
      color: #ffffff;
      background-color: rgba(0, 0, 0, 0.3);

      &::before {
        content: '';
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require('@/assets/img/playlist_sprite.png').default}) -182px
          0;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .operate {
        display: none;
        align-items: center;
        margin-right: 10px;

        .item {
          display: inline-block;
          height: 16px;
          margin: 0 0 0 10px;
          text-indent: -9999px;

          &.favor {
            width: 16px;
            background-position: -24px 0;

            &:hover {
              background-position: -24px -20px;
            }
          }

          &.share {
            width: 14px;
            background-position: 0 0;

            &:hover {
              background-position: 0 -20px;
            }
          }

          &.download {
            width: 14px;
            background-position: -57px -50px;

            &:hover {
              background-position: -80px -50px;
            }
          }

          &.delete {
            width: 13px;
            background-position: -51px 0;

            &:hover {
              background-position: -51px -20px;
            }
          }
        }
      }

      .singer {
        width: 80px;

        &:hover {
          text-decoration: underline;
        }
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
`
