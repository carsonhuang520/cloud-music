import styled from 'styled-components'

export const WineWrapper = styled.div`
  .content {
    background: #ffffff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${require('@/assets/img/mine_sprite.png').default}) 0
        104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 302px;
        text-indent: -9999px;
      }
    }
  }
`
