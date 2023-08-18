import { Breadcrumb } from 'react-bootstrap'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body, html, #root {
  margin: 0;
  padding: 0;
  display:flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #060606;
  width: 100%;
}


main{
  min-height: 100%;
  background-color: #060606;
}

footer{
  margin-top:auto;
}

p{
  margin: 0;
  color:white;
}
`
export const BreadcrumberStyled = styled(Breadcrumb)`
  padding-bottom: 1.5;
  a {
    text-decoration: none;
    color: white;

    .active {
      color: #fa2d01;
    }
  }
`
