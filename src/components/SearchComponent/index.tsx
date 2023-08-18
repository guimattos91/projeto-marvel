import { memo, useCallback, useState } from 'react'

import { ButtonStyle, InputStyle, SearchDivPosition } from './styles'

interface ISearchProps {
  fetchCategory: (page: number, search?: string | undefined) => Promise<void>
}

const SearchComponent: React.FC<ISearchProps> = ({ fetchCategory }) => {
  const [search, setSearch] = useState('')
  const [hasSearch, setHasSearch] = useState(false)

  const handleSearch = useCallback(() => {
    fetchCategory(1, search)
    setHasSearch(true)
  }, [fetchCategory, search, setHasSearch])

  const clearSearch = useCallback(() => {
    setSearch('')
    fetchCategory(1)
    setHasSearch(false)
  }, [fetchCategory, setHasSearch])

  return (
    <SearchDivPosition>
      <InputStyle
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.length > 0 && (
        <ButtonStyle type="button" onClick={handleSearch}>
          Buscar
        </ButtonStyle>
      )}
      {hasSearch === true && (
        <ButtonStyle type="button" onClick={clearSearch} className="ms-2">
          Voltar
        </ButtonStyle>
      )}
    </SearchDivPosition>
  )
}

export default memo(SearchComponent)
