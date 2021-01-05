import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width + 'px'};

  .album-image {
    position: relative;
    margin-top: 24px;
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.size + 'px'};
    overflow: hidden;

    img {
      width: ${(props) => props.size + 'px'};
      height: ${(props) => props.size + 'px'};
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }

    .play {
      position: absolute;
      left: ${(props) => (props.size === 130 ? '94px' : '71px')};
      bottom: 5px;
      width: ${(props) => (props.size === 130 ? '28px' : '22px')};
      height: ${(props) => (props.size === 130 ? '28px' : '22px')};
      display: none;
      text-indent: -9999px;
      text-decoration: none;
      background-position: ${(props) =>
        props.size === 130 ? '0 -140px' : '0 -85px'};

      &:hover {
        background-position: ${(props) =>
          props.size === 130 ? '0 -170px' : '0 -110px'};
      }
    }

    &:hover {
      .play {
        display: block;
      }
    }
  }

  .album-info {
    font-size: 12px;
    margin-top: 7px;

    .name {
      color: #000000;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .artist {
      color: #666666;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
