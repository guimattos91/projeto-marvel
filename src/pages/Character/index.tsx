import { memo, useEffect } from 'react'

import { Breadcrumb, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { useCharacters } from 'context/CharactersContext'

import Footer from 'components/Footer'
import Header from 'components/Header'

import { getImageUrl } from 'helpers'

import useTitle from 'hooks/useTitle'

import { BreadcrumberStyled } from 'styles/styles'

import {
  BlurDiv,
  DivRatio,
  H1White,
  H2White,
  H3White,
  PWhite,
  RowStyled,
} from './styles'

const Character: React.FC = () => {
  const { character, isLoading, error, fetchCharacter } = useCharacters()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${character?.name} | Characters`))

  useEffect(() => {
    if (id) fetchCharacter(id)
  }, [fetchCharacter, id])
  return (
    <>
      <Header />
      <main>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {!isLoading && !error && character && (
          <>
            <div
              style={{
                backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'start center',
                height: '30vh',
              }}
            >
              <BlurDiv className="d-flex align-items-end" />
            </div>
            <Container>
              <Row className="row-cols-1 row-cols-md-2">
                <Col>
                  <DivRatio
                    aspectRatio="1x1"
                    style={{
                      backgroundImage: `url(${getImageUrl(
                        character.thumbnail,
                      )})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                  >
                    <div />
                  </DivRatio>
                </Col>
                <Col className="pt-4">
                  <BreadcrumberStyled>
                    <Link to="/">Home</Link>
                    <p className="text-white px-2">|</p>
                    <Link to="/characters">Characters</Link>
                    <p className="text-white px-2">|</p>
                    <Breadcrumb.Item active>{character.name}</Breadcrumb.Item>
                  </BreadcrumberStyled>
                  {character?.name && (
                    <H1White className="d-flex align-self-center">
                      {character.name}
                    </H1White>
                  )}
                  {!character?.name && (
                    <H1White className="d-flex align-self-center">
                      Name not found
                    </H1White>
                  )}
                  {character.description && (
                    <PWhite className="ms-3">{character.description}</PWhite>
                  )}
                  {!character.description && (
                    <PWhite className="ms-3">
                      This character does not yet have a description.
                    </PWhite>
                  )}
                  {character.events.items.length >= 1 && (
                    <>
                      <H2White className="d-flex mt-5">
                        Events of this Character
                      </H2White>
                      <div className="d-flex flex-wrap">
                        {character.events.items.map(
                          (event: {
                            resourceURI: string
                            name: string
                            type: string
                          }) => (
                            <PWhite className="mx-3">{event.name}</PWhite>
                          ),
                        )}
                      </div>
                    </>
                  )}
                </Col>
              </Row>
              <RowStyled>
                <Col className="my-5">
                  {character.events.items.length >= 1 && (
                    <>
                      <div className="d-flex justify-content-center">
                        <H2White className="d-flex">Want to know more?</H2White>
                      </div>
                      <PWhite className="text-center">
                        Checkout the comics this character appears
                      </PWhite>
                      <div className="d-flex justify-content-center flex-wrap">
                        {character.comics.items.map(
                          (event: {
                            resourceURI: string
                            name: string
                            type: string
                          }) => (
                            <H3White className="px-5 pt-4">
                              {event.name}
                            </H3White>
                          ),
                        )}
                      </div>
                    </>
                  )}
                  {!isLoading &&
                    !error &&
                    character.events.items.length === 0 && (
                      <PWhite className="d-flex flex-column align-items-center justify-content-center py-3">
                        Working on this characters event
                      </PWhite>
                    )}
                </Col>
              </RowStyled>
              <Row className="mt-3">
                <Col>
                  <H2White className=" pt-5 d-flex justify-content-center text-align-center">
                    Checkout Our Next Movie
                  </H2White>
                  <PWhite className="d-flex justify-content-center text-align-center">
                    Soon in the theaters
                  </PWhite>
                  <div className="pb-5 pt-2 d-flex justify-content-center">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/RlOB3UALvrQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default memo(Character)
