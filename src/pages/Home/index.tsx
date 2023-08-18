import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import BannerImage from 'assets/Banner.jpeg'
import CharactersBanner from 'assets/characters.png'
import ComicBanner from 'assets/comics.png'

// import { useCharacters } from 'context/CharactersContext'
import { useComics } from 'context/ComicsContext'

// import CharacterCard from 'components/CharacterCard'
import ComicsCard from 'components/ComicsCard'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainTitles from 'components/MainTitles'

const Home: React.FC = () => {
  // const { characters, isLoading, fetchCharacters } = useCharacters()
  const { comics, isLoading, fetchComics } = useComics()

  useEffect(() => {
    fetchComics(1, 'x-men')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selectedComicIds = [107704, 110311, 1332, 17486]

  const filteredComics = comics.filter((item) =>
    selectedComicIds.includes(item.id),
  )

  return (
    <>
      <Header />
      <main>
        <img
          src={BannerImage}
          alt="BannerImage"
          style={{ width: `100%`, height: `auto` }}
        />
        <Container>
          <Row>
            <Col>
              <Link to="/characters">
                <img
                  src={CharactersBanner}
                  alt="CharactersBanner"
                  style={{ width: `100%`, height: `auto` }}
                />
              </Link>
              <Link to="/comics">
                <img
                  className="pt-3"
                  src={ComicBanner}
                  alt="ComicBanner"
                  style={{ width: `100%`, height: `auto` }}
                />
              </Link>
            </Col>
          </Row>
          <Row className="g-3">
            <MainTitles title="Best Sellers" />
            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="success" />
              </div>
            )}
            {!isLoading &&
              filteredComics.map((comic) => (
                <Col xs={6} md={3} key={comic.id} className="d-flex">
                  <ComicsCard comic={comic} />
                </Col>
              ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Home)
