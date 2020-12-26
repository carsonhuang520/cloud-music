import styled from 'styled-components'

export const FooterWrapper = styled.div`
  height: 172px;
  background: #f2f2f2;
  color: #666666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }
  }

  .copyright, .report, .info {
    span {
      margin-right: 15px;
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;
  margin-top: 18px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: inline-block;
      height: 45px;
      width: 50px;
      background-image: url(${require('@/assets/img/sprite_footer_02.png').default});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }

    :nth-child(2) .link {
      background-position: 0 0;
    }

    :nth-child(3) .link {
      background-position: -60px -50px;
    }

    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }

    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }

    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`