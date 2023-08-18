import { memo } from 'react'

import { Link } from 'react-router-dom'

import { CategoryTitle, GrayLines } from './styles'

const NavHeader: React.FC = () => {
  return (
    <GrayLines className="pb-2 pt-2">
      <nav
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: `#151515`,
          color: 'white',
        }}
      >
        <CategoryTitle>
          <Link
            to="/characters"
            className=" text-decoration-none px-3 text-reset"
          >
            Characters
          </Link>
        </CategoryTitle>
        <CategoryTitle>
          <Link to="/comics" className=" text-decoration-none px-3 text-reset">
            Comics
          </Link>
        </CategoryTitle>
      </nav>
    </GrayLines>
  )
}

export default memo(NavHeader)
