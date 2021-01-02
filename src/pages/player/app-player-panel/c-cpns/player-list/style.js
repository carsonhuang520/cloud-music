import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;

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
      background-color: #000000;
    }

    &.active {
      color: #ffffff;
      background-color: #000000;

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
