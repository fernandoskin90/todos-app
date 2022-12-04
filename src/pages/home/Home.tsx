import { CardTodo, HeaderDescription } from '@/components'
import { useTodos } from '@/hooks'
import { Header, Title } from './home.styles'

export function Home() {
  const { todosIds } = useTodos()
  return (
    <>
      <Header>
        <Title>Welcome back, Fernando</Title>
        <HeaderDescription />
      </Header>
      {todosIds.map((id) => (
        <CardTodo key={id} todoId={id} />
      ))}
    </>
  )
}
