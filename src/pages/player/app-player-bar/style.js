import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  z-index: 99;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    height: 36px;
    width: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    &:hover {
      background-position: -40px
        ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      position: relative;
      top: 8px;
      left: 8px;
      color: #e1e1e1;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png').default})
            right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png').default})
            left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png').default}) 0 -250px;

          &:focus {
            box-shadow: none;
          }
        }
      }

      .time {
        .now-time {
          color: #a1a1a1;
        }

        .total-time {
          color: #797979;
        }

        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    margin-right: 5px;

    .favor {
      cursor: pointer;
      background-position: -88px -163px;

      &:hover {
        background-position: -88px -189px;
      }
    }

    .share {
      cursor: pointer;
      background-position: -114px -163px;

      &:hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume-control {
      position: absolute;
      bottom: 42px;
      width: 32px;
      height: 113px;
      background-position: 0px -503px;
      z-index: 999;

      .ant-slider {
        width: 4px;
        height: 93px;
        margin: 12px 10px;

        .ant-slider-rail {
          height: 0;
          background: url(${require('@/assets/img/progress_bar.png').default})
            right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/playbar_sprite.png').default}) -40px
            bottom;
        }

        .ant-slider-handle {
          left: 2px;
          width: 18px;
          height: 20px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png').default}) -40px -250px;

          &:focus {
            box-shadow: none;
          }
        }
      }
    }

    .volume {
      cursor: pointer;
      background-position: ${(props) =>
        props.isMute ? '-104px -69px' : '-2px -248px'};

      &:hover {
        background-position: ${(props) =>
          props.isMute ? '-126px -69px' : '-31px -248px'};
      }
    }

    .loop {
      cursor: pointer;
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};

      &:hover {
        background-position: ${(props) => {
          switch (props.sequence) {
            case 1:
              return '-93px -248px'
            case 2:
              return '-93px -344px'
            default:
              return '-33px -344px'
          }
        }};
      }
    }

    .playlist {
      padding-left: 18px;
      color: #cccccc;
      width: 59px;
      text-align: center;
      cursor: pointer;
      background-position: -42px -68px;

      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`
