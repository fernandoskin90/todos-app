import { CardTodo, HeaderDescription } from '@/components'
import { useTodos } from '@/hooks'
import { ContainerHome, Header, Title } from './home.styles'

export function Home() {
  const { todosIds } = useTodos()
  return (
    <ContainerHome>
      <Header>
        <Title>Welcome back, Fernando</Title>
        <HeaderDescription />
      </Header>
      {todosIds.map((id) => (
        <CardTodo key={id} todoId={id} />
      ))}
    </ContainerHome>
  )
}
