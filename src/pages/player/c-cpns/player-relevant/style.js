import styled from 'styled-components'

export const RelevantWrapper = styled.div`
  margin-top: 40px;

  .songs {
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .info {
        .title {
          a {
            color: #333333;
          }
        }

        .artist {
          a {
            color: #999999;
          }
        }
      }

      .operate {
        .item {
          display: inline-block;
          width: 10px;
          height: 11px;
          cursor: pointer;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 10px;
          opacity: 0.9;

          &:hover {
            opacity: 1;
          }
        }

        .add {
          background-position: -87px -454px;
          opacity: 0.9;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`
