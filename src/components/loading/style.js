import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  padding: 40px;

  .spin {
    .ant-spin-text {
      color: #c20c0c;
    }
  }
`
