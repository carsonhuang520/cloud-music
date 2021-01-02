import styled from 'styled-components'

export const LyricPanelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .lyric-content {
    .lyric-item {
      height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
`
