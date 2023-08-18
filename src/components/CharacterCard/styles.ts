import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

interface ITitleProps {
  isHidden: boolean
}
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
export const PLink = styled(Link)`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: white;
  }
`

export const HiddenParagraph = styled.p`
  opacity: 0;
  transform: translateY(20px);
  bottom: 0;
  left: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  animation-delay: 0.2s;
`
export const CardBody = styled.div`
  border-style: none none solid none;
  border-color: #fa2d01;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  background: linear-gradient(
    0deg,
    rgba(36, 0, 0, 1) 0%,
    rgba(0, 212, 255, 0) 40%
  );

  text-align: center;
  color: white;
`
export const RatioDiv = styled.div`
  position: relative;
  width: 100%;

  ::before {
    display: block;
    padding-top: 130%;
    content: '';
  }
`
export const CharacterNameTitle = styled.p<ITitleProps>`
  font-weight: 700;
  text-align: center;
  color: White;
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  opacity: 1;
  transform: translateY(0);
  position: absolute;
  bottom: ${(props) => (props.isHidden ? '40px' : '10px')};
  transition: bottom 0.3s ease-in-out;
`
