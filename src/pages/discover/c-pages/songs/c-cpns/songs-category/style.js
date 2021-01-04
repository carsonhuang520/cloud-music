import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: -25px;
  z-index: 99;
  width: 700px;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px 2px #d3d3d3;
  border-radius: 5px;
  background: #fefefe;
  padding-top: 10px;

  .arrow {
    position: absolute;
    top: -11px;
    left: 110px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .all {
    padding: 10px 25px;
    border-bottom: 1px solid #e2e2e2;

    .link {
      color: #333333;
      display: inline-block;
      width: 75px;
      height: 26px;
      line-height: 24px;
      text-align: center;
      border: 1px solid #d3d3d3;
      background: #fafafa;
      border-radius: 3px;
    }
  }

  .category {
    padding-left: 25px;

    dl {
      display: flex;
      align-items: flex-start;
    }

    dt {
      display: inline-flex;
      align-items: center;
      width: 70px;
      padding: 15px 0 10px;
      text-align: center;
      font-weight: bold;

      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-position: -20px -735px;
        margin-right: 8px;
      }
    }

    dl.item0 {
      dd {
        padding-bottom: 10px;
      }
    }

    dl.item1 {
      i {
        background-position: 0 -60px;
      }
    }

    dl.item2 {
      i {
        background-position: 0 -88px;
      }
    }

    dl.item3 {
      i {
        background-position: 0 -117px;
      }
    }

    dl.item4 {
      i {
        background-position: 0 -141px;
      }

      dd {
        padding-bottom: 25px;
      }
    }

    dd {
      padding: 18px 15px 0 15px;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid #e2e2e2;

      .item {
        margin-bottom: 8px;
      }

      .link {
        color: #333;
        cursor: pointer;

        &:hover {
          color: #000000;
          text-decoration: underline;
        }
      }

      .divider {
        margin: 0 12px;
        color: #e2e2e2;
      }
    }
  }
`
