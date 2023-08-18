import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > li {
    list-style: none;
    color: #ffffff;

    a {
      display: inline-block;
      border: none;
      padding: 10px 20px;
      margin: 5px 5px;
      color: #ffffff;
      text-decoration: none;
      background-color: #fa2d01;
      font-weight: 700;

      &:hover {
        background-color: #ae1f01;
        color: white;
      }
    }

    &.selected a {
      background-color: #151515;
      color: #ffffff;
      border: none;
    }
  }
`
