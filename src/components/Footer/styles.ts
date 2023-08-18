import { Col } from 'react-bootstrap'
import styled from 'styled-components'

export const EmailDiv = styled.div`
  border-radius: 50px;
  padding: 5px 5px 5px 5px;
  background-color: #fff;
  border-color: #dedede;
  border-style: solid;
  border-width: thin;
  flex: flex;
  align-items: center;

  &:hover {
    border-color: #fa2d01;
  }
`

export const Buttonmail = styled.button`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #fa2d01;
  border-style: solid;
  border-color: #fa2d01;
  align-items: center;
  justify-content: center;
  flex: flex;
  border: none;
  color: #fff;
`

export const InputEmail = styled.input`
  border-style: none;
  width: 90%;
  margin: 0;
  padding: 0;
  padding-left: 1rem;

  :focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`

export const StyleFooter = styled.footer`
  font-family: 'Bebas Neue', cursive;
  background-color: #151515;
  color: #fff;
  flex: flex;
  flex-wrap: wrap;
`

export const UlStyled = styled.ul`
  flex: flex;
  justify-content: center;

  li {
    list-style: none;
    color: #ffffff;
    text-align: center;
  }
`

export const ColCards = styled(Col)`
  flex: flex;
  justify-content: center;
`
export const SignatureDiv = styled.div`
  background-color: black;
  flex: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  padding: 0px;
  margin: 0px;
  p {
    margin: 0px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #fa2d01;
    :hover {
      text-decoration: underline;
    }
  }
`
export const CategoryDiv = styled.div`
  color: white;
  text-align: center;
  :hover {
    color: #fa2d01;
  }
`
export const StyledIcons = styled.a`
  color: white;
  text-align: center;
  :hover {
    color: #fa2d01;
  }
`
