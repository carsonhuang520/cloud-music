import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: flex-end;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    }

    .count {
      color: #666666;
      margin-left: 20px;
      margin-bottom: 5px;
    }
  }

  .right {
    color: #666666;

    .count {
      color: #c20c0c;
      font-weight: bold;
    }
  }
`
