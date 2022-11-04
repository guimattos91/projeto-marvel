import { memo } from 'react'

import { Container, Row } from 'react-bootstrap'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import Logo from 'assets/marvel-logo.png'

import {
  BlackSignatureDiv,
  Buttonmail,
  ColCards,
  EmailDiv,
  InputEmail,
  StyleFooter,
} from './styles'

const Footer: React.FC = () => {
  return (
    <StyleFooter>
      <Container className="py-3 py-md-5">
        <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center justify-content-lg-between align-items-center">
          <ColCards>
            <div className="d-flex justify-content-center py-3 py-md-0">
              <Link to="/">
                <img src={Logo} alt="logo" height="100" width="auto" />
              </Link>
            </div>
          </ColCards>
          <ColCards className="py-3 py-md-0">
            <nav>
              <div className="text-center">
                <Link
                  to="/characters"
                  className="text-decoration-none text-reset"
                >
                  Characters
                </Link>
              </div>
              <div className="text-center">
                <Link
                  to="/comics"
                  className="text-decoration-none text-reset text-center"
                >
                  Comics
                </Link>
              </div>
            </nav>
          </ColCards>
          <ColCards className="py-3 py-md-0">
            <nav>
              <h5 className="text-center">Follow Us:</h5>
              <div className="text-center">
                <a href="https://www.instagram.com/marvel/" className="px-2">
                  <BsInstagram color="white" />
                </a>
                <a href="https://www.facebook.com/Marvel/" className="px-2">
                  <BsFacebook color="white" />
                </a>
                <a href="https://twitter.com/marvel" className="px-2">
                  <BsTwitter color="white" />
                </a>
              </div>
            </nav>
          </ColCards>
          <ColCards className="py-3 py-md-0">
            <h4 className="text-center">Subscribe now</h4>
            <EmailDiv className="d-flex justify-content-between">
              <InputEmail
                type="email"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
              <Buttonmail
                type="submit"
                className="d-flex justify-content-center"
              >
                <HiOutlineMail />
              </Buttonmail>
            </EmailDiv>
          </ColCards>
        </Row>
      </Container>
      <BlackSignatureDiv className="d-flex">
        <p className="me-2">Site by:</p>
        <a
          href="https://www.linkedin.com/in/guimattos91/"
          target="_blank"
          rel="noreferrer"
        >
          Guilherme Mattos
        </a>
      </BlackSignatureDiv>
    </StyleFooter>
  )
}

export default memo(Footer)
