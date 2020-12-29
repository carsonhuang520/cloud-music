import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 22px;
    color: #666666;
  }

  a {
    margin-top: 10px;
    width: 100px;
    height: 31px;
    line-height: 31px;
    display: inline-block;
    background-position: 0 -195px;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 0 #8a060b;
    color: #ffffff;

    :hover {
      background-position: -110px -195px;
    }
  }
`
