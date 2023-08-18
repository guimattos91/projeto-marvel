import { memo, useCallback, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { getImageUrl, strToSlug } from 'helpers'

import { ComicsType } from 'types/ComicsType'

import { PLink, CardBody, RatioDiv, ComicsCardDiv } from './styles'

interface IComicsTypeProps {
  comic: ComicsType
}

const ComicsCard: React.FC<IComicsTypeProps> = ({ comic }) => {
  const [thumbailPosition, setThumbailPosition] = useState('center center')

  const thumbnailHandler = useCallback(() => {
    if (
      comic.thumbnail.path ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    ) {
      setThumbailPosition('left center')
    }
  }, [comic.thumbnail.path])

  useEffect(() => {
    thumbnailHandler()
  })

  return (
    <ComicsCardDiv>
      <Link to={`/comic/${comic.id}/${strToSlug(comic.title)}`}>
        <RatioDiv
          className="ratio"
          style={{
            backgroundImage: `url(${getImageUrl(comic.thumbnail)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${thumbailPosition}`,
          }}
        />
      </Link>
      <CardBody>
        <PLink to={`/comic/${comic.id}/${strToSlug(comic.title)}`}>
          {comic.title}
        </PLink>
      </CardBody>
    </ComicsCardDiv>
  )
}

export default memo(ComicsCard)
