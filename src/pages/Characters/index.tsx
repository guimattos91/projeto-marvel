import { memo, useCallback, useEffect } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Breadcrumb, Col, Container, Row, Spinner } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import Jarvis from 'assets/jarvis2.png'

import { useCharacters } from 'context/CharactersContext'

import CharacterCard from 'components/CharacterCard'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchComponent from 'components/SearchComponent'

import useTitle from 'hooks/useTitle'

import { Pagination } from 'styles/Pagination'
import { BreadcrumberStyled } from 'styles/styles'

import {
  ComicCharacterType,
  EventType,
  ThumbnailType,
} from 'types/CharacterType'

import { ButtonBack, ColCards, StyledLink, TitleH1 } from './styles'

const CharactersPage: React.FC = () => {
  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    error,
    fetchCharacters,
  } = useCharacters()
  // const [search, setSearch] = useState('')

  const handlePageChange = useCallback(
    (page: number) => fetchCharacters(page),
    [fetchCharacters],
  )

  useEffect(() => {
    fetchCharacters(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setTitle = useTitle()
  useEffect(() => setTitle('Characters'))

  return (
    <>
      <Header />
      <main>
        <Container>
          <BreadcrumberStyled className="pt-3">
            <Link to="/">Home</Link>
            <p className="text-white px-2">|</p>
            <Breadcrumb.Item active>Characters</Breadcrumb.Item>
          </BreadcrumberStyled>
          <Row>
            <Col>
              <TitleH1>Characters</TitleH1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <SearchComponent fetchCategory={fetchCharacters} />
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="danger" />
              </div>
            )}
            {!isLoading &&
              !error &&
              characters.map(
                (character: {
                  id: number
                  name: string
                  thumbnail: ThumbnailType
                  description: string
                  events: EventType
                  comics: ComicCharacterType
                }) => (
                  <ColCards
                    key={character.id}
                    className="d-flex"
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <CharacterCard character={character} />
                  </ColCards>
                ),
              )}
            {!isLoading && !error && characters.length === 0 && (
              <>
                <img
                  src={Jarvis}
                  alt="Personagem Não Encontrado"
                  style={{ width: `100%`, height: `auto` }}
                />
                <div className="d-flex flex-column align-items-center justify-content-center py-3">
                  <ButtonBack className="mb-3" type="button">
                    <StyledLink href="/characters" className="px-4 py-2">
                      Voltar
                    </StyledLink>
                  </ButtonBack>
                </div>
              </>
            )}
          </Row>
          <Row className="mt-4">
            <Col>
              {totalPages > 1 && (
                <Pagination
                  className="d-flex justify-content-center px-3 text-decoration-none"
                  nextLabel="Next"
                  nextClassName={
                    currentPage === Math.ceil(totalPages) ? 'd-none' : undefined
                  }
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={totalPages}
                  previousLabel={currentPage > 1 ? 'Previous' : null}
                  previousClassName={currentPage === 1 ? 'd-none' : undefined}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                />
              )}
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(CharactersPage)
