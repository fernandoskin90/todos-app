import styled from '@emotion/styled'
import { HeaderDescription } from '@/components'
import { Home } from './pages'

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
`

function App() {
  return (
    <Main>
      <Header>
        <Title>Welcome back, Fernando</Title>
        <HeaderDescription />
      </Header>
      <Home />
    </Main>
  )
}

export default App
