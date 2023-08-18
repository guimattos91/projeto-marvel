import { memo, useCallback, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import slugify from 'slugify'

import { getImageUrl, strToSlug } from 'helpers'

import { CharacterType } from 'types/CharacterType'

import { CardBody, CharacterNameTitle, PLink, RatioDiv } from './styles'

interface ICharactersProps {
  character: CharacterType
}

const CharacterCard: React.FC<ICharactersProps> = ({ character }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [thumbailPosition, setThumbailPosition] = useState('center center')

  const thumbnailHandler = useCallback(() => {
    if (
      character.thumbnail.path ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    ) {
      setThumbailPosition('left center')
    }
  }, [character.thumbnail.path])

  useEffect(() => {
    thumbnailHandler()
  })

  return (
    <div style={{ width: '100% ' }}>
      <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
        <RatioDiv
          className="ratio"
          style={{
            backgroundImage: `url(${getImageUrl(character.thumbnail)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `${thumbailPosition}`,
          }}
        >
          <CardBody
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CharacterNameTitle isHidden={isHovered}>
              <PLink
                to={`/characters/${character.id}/${slugify(character.name)}`}
              >
                {character.name}
              </PLink>
            </CharacterNameTitle>
          </CardBody>
        </RatioDiv>
      </Link>
    </div>
  )
}

export default memo(CharacterCard)
