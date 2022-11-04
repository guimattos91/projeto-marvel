import { memo, useCallback, useEffect, useState } from 'react'

// eslint-disable-next-line import-helpers/order-imports
import { Breadcrumb, Col, Container, Row, Spinner } from 'react-bootstrap'

// import { BsSearch } from 'react-icons/bs'

import Jarvis from 'assets/jarvis2.png'

import { useCharacters } from 'context/CharactersContext'

import CharacterCard from 'components/CharacterCard'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { BreadccrumbStyled, MainStyle } from 'styles/Main'
import { Pagination } from 'styles/Pagination'

import {
  ComicCharacterType,
  EventType,
  ThumbnailType,
} from 'types/CharacterType'

import {
  ButtonBack,
  ButtonStyle,
  ColCards,
  InputStyle,
  StyledP,
  TitleH1,
} from './styles'

const CharactersPage: React.FC = () => {
  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    error,
    fetchCharacters,
  } = useCharacters()
  const [search, setSearch] = useState('')

  const handlePageChange = useCallback(
    (page: number) => fetchCharacters(page),
    [fetchCharacters],
  )

  useEffect(() => {
    fetchCharacters(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = useCallback(
    () => fetchCharacters(1, search),
    [fetchCharacters, search],
  )

  const clearSearch = useCallback(() => {
    setSearch('')
    fetchCharacters(1)
  }, [fetchCharacters])

  const setTitle = useTitle()
  useEffect(() => setTitle('Characters'))

  return (
    <>
      <Header />
      <MainStyle>
        <Container>
          <BreadccrumbStyled>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Characters</Breadcrumb.Item>
          </BreadccrumbStyled>
          <Row className="pt-4">
            <Col className="d-flex justify-content-center flex-wrap">
              <InputStyle
                type="text"
                placeholder="Buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="my-4 my-md-2">
                <ButtonStyle type="button" onClick={handleSearch}>
                  <p className="m-0 px-2">Buscar</p>
                </ButtonStyle>
                {search.length > 0 && (
                  <ButtonStyle type="button" onClick={clearSearch}>
                    <p className="m-0 px-2">Limpar</p>
                  </ButtonStyle>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <TitleH1 className="p-3 pt-5">Characters</TitleH1>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
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
                  <ColCards key={character.id} className="d-flex">
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
                  <ButtonBack
                    className="mb-3"
                    type="button"
                    onClick={clearSearch}
                  >
                    <StyledP className="px-4 py-2">Voltar</StyledP>
                  </ButtonBack>
                </div>
              </>
            )}
          </Row>
          <Row>
            <Col>
              {totalPages > 1 && (
                <Pagination
                  className="d-flex justify-content-center px-3 text-decoration-none"
                  nextLabel="Next"
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={totalPages}
                  previousLabel={currentPage > 1 && 'Previous'}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                />
              )}
            </Col>
          </Row>
        </Container>
      </MainStyle>
      <Footer />
    </>
  )
}

export default memo(CharactersPage)
