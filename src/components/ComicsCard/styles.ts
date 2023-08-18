import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-10px);
  }
`

export const CardBody = styled.div`
  flex: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  &:hover {
    border-color: #fa2d01;
  }
`

export const RatioDiv = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  :hover {
    /* transform: translateY(20px); */
    animation: ${fadeIn} 0.3s ease-in forwards;
    animation-delay: 0.2s;
    color: #fa2d01;
  }

  ::before {
    display: block;
    padding-top: 150%;
    content: '';
  }
`
export const ComicsCardDiv = styled.div`
  width: 100%;
  color: white;
  :hover {
    color: #fa2d01;
  }
`

export const PLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: white;
    text-decoration: none;
  }
`
export const DivImage = styled.img`
  width: 14rem;
`
