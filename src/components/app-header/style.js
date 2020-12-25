import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #ffffff;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    .select-item {
      position: relative;
      a {
        display: inline-block;
        color: #cccccc;
        padding: 0 20px;
      }

      :last-of-type a {
        position: relative;
        ::after {
          content: '';
          position: absolute;
          top: 20px;
          right: -15px;
          height: 19px;
          width: 28px;
          background-image: url(${require('@/assets/img/sprite_01.png').default});
          background-position: -190px 0;
        }
      }

      &:hover a,
      a.active {
        color: #ffffff;
        background: #000000;
        text-decoration: none;
      }

      .active .icon {
        display: inline-block;
        position: absolute;
        bottom: -1px;
        left: 50%;
        width: 12px;
        height: 7px;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #cccccc;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    outline: none;
    border-color: transparent;
    box-shadow: none;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
    border: 1px solid #666666;
    text-align: center;
    margin: 0 16px;
    background: transparent;

    &:hover {
      cursor: pointer;
      color: #ffffff;
      border-color: #ffffff;
    }
  }

  .login {
    color: #787878;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #666666;
    }
  }
`
