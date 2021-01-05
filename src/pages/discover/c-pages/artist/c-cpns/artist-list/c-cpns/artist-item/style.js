import styled from 'styled-components'

export const ArtistItemWrapper = styled.div`
  width: 130px;
  margin-top: ${(props) => (props.index < 10 ? '15px' : 0)};
  border-bottom: ${(props) =>
    props.index >= 5 && props.index <= 9 ? '1px dotted #d3d3d3' : 'none'};

  .image {
    cursor: pointer;

    img {
      width: 130px;
      height: 130px;
    }
  }

  .info {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    .name {
      cursor: pointer;

      &:hover {
        color: #c20c0c;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
      cursor: pointer;
    }
  }
`
