import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import Hulk from 'assets/hulk-smash.png'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { TitleH1 } from './styles'

const NotFound: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle(t('not-found.title'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.resolvedLanguage])
  return (
    <>
      <Header />
      <main className="d-flex flex-column align-items-center justify-content-center">
        <img
          src={Hulk}
          alt="Página Não Encontrada"
          style={{ width: `30%`, height: `auto` }}
        />
        <TitleH1> 404 - Hulk Esmagou essa página</TitleH1>
      </main>
      <Footer />
    </>
  )
}

export default memo(NotFound)
