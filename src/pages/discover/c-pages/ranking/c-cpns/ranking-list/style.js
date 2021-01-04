import styled from 'styled-components'

export const RankingListWrapper = styled.div`
  padding: 0 40px;

  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;

      thead {
        th {
          height: 34px;
          line-height: 34px;
          color: #666666;
          border: 1px solid #dddddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
          background-image: url(${require("@/assets/img/sprite_table.png").default});
        }

        .ranking {
          width: 78px;
          border-left: none;
        }

        .duration {
          width: 99px;
        }

        .singer {
          width: 173px;
        }
      }

      tbody {
        td {
          padding: 6px 10px;
        }

        tr:nth-child(2n) {
          background-color: #ffffff;
        }

        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;

          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
            cursor: pointer;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            cursor: pointer;

            &:hover {
              background-position: 0 -128px;
            }
          }

          .name {
            margin-left: 10px;
          }
        }

        .duration {
          color: #666666;
        }

        .operate {
          /* display: flex; */
          align-items: center;
          display: none;

          .btn {
            display: inline-block;
            width: 13px;
            height: 13px;
            background-position: 0 -700px;
            text-indent: -9999px;

            &:hover {
              background-position: -22px -700px;
            }
          }

          .item {
            display: inline-block;
            width: 18px;
            height: 16px;
            margin: 2px 0 0 4px;
            text-indent: -9999px;
            cursor: pointer;

            &.favor {
              background-position: 0 -174px;

              &:hover {
                background-position: -20px -174px;
              }
            }

            &.share {
              background-position: 0 -195px;

              &:hover {
                background-position: -20px -195px;
              }
            }

            &.download {
              background-position: -81px -174px;

              &:hover {
                background-position: -104px -174px;
              }
            }
          }
        }

        tr:hover {
          .duration {
            display: none;
          }
          .operate {
            display: flex;
          }
        }
      }
    }
  }
`
