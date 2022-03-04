import { BrowserRouter } from 'react-router-dom'

import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

import { FavoritesProvider } from './contexts/FavoritesContext'

import { Routes } from './routes'

import { Container } from './styles/app'
import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Container>
          <Sidebar />

          <Routes />

          <Footer />
        </Container>
      </FavoritesProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export { App };
