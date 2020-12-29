import styled from 'styled-components'

export const HotRadioWrapper = styled.div`
  padding: 20px;

  .radio-list {
    margin-top: 20px;

    .item {
      width: 210px;
      display: flex;
      margin-bottom: 10px;

      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 10px;

        .name {
          margin-top: 3px;
          color: #000000;
        }

        .position {
          color: #666666;
        }
      }
    }
  }
`
