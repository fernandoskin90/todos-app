import styled from '@emotion/styled'
import { Home } from './pages'

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Main>
      <Home />
    </Main>
  )
}

export default App
