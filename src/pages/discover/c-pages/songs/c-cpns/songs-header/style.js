import styled from 'styled-components'

export const SongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
`

export const SongsHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .title {
    font-size: 24px;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
  }

  .select {
    position: relative;
    top: 2px;
    width: 91px;
    height: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    border: 1px solid #d3d3d3;
    color: #0c73c2;
    margin-left: 10px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #ffffff;
    }

    i {
      margin-left: 5px;
      display: inline-block;
      width: 8px;
      height: 5px;
      background-position: -70px -543px;
    }
  }
`

export const SongsHeaderRight = styled.div`
  .hot {
    width: 46px;
    height: 29px;
    color: #ffffff;
    background-color: #c20c0c;
    border-radius: 3px;
  }
`
