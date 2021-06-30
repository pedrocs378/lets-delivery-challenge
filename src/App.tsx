import { BrowserRouter } from 'react-router-dom'

import { Sidebar } from './components/Sidebar'

import { Routes } from './routes'

import { Container } from './styles/app'
import GlobalStyles from './styles/global'

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Sidebar />

        <Routes />
      </Container>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export { App };
