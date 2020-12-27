import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${(props) => props.right || 0} 20px 0;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      text-indent: -9999px;

      &:hover {
        cursor: pointer;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 -537px;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ccc;
      padding: 0 10px;

      .erji {
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }

      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;

        &:hover {
          cursor: pointer;
          background-position: 0 -60px;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000000;
    margin-top: 5px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .cover-source {
    color: #666666;
    > span {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
