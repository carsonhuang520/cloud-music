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
