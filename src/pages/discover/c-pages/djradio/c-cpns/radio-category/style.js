import styled from 'styled-components'

export const RadioCategoryWrapper = styled.div`
  .category-list {
    display: flex;
    flex-wrap: wrap;

    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70px;
      height: 70px;
      margin: 0 0 25px 30px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
      border: 2px solid transparent;
      color: #888888;

      &:not(.active):hover {
        background: #eeeeee;
      }

      &.active {
        color: #c20c0c;
        border: 2px solid #d35757;

        .image {
          background-position: -48px 0;
        }
      }
    }
  }
`

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.imgUrl});
`
