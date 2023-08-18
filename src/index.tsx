import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'services/i18n'

import { CharactersProvider } from 'context/CharactersContext'
import { ComicsProvider } from 'context/ComicsContext'

import { GlobalStyle } from 'styles/styles'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <CharactersProvider>
        <ComicsProvider>
          <App />
          <GlobalStyle />
        </ComicsProvider>
      </CharactersProvider>
    </Suspense>
  </React.StrictMode>,
)
