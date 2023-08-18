import { memo } from 'react'

// import { CharacterType } from 'types/CharacterType';

import { TitleH2 } from './styles'

interface IMaintitleProps {
  title: string
}

const Maintitle: React.FC<IMaintitleProps> = ({ title }) => {
  // const character = useState<CharacterType | null>(null);
  return (
    <div className="pt-4 d-flex flex-column align-items-center">
      <TitleH2>{title}</TitleH2>
    </div>
  )
}

export default memo(Maintitle)
