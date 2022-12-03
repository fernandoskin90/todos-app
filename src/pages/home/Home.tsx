import { useTodos } from '@/hooks'
import { Header, Title } from './home.styles'

export function Home() {
  const { todos } = useTodos()
  return (
    <>
      <Header>
        <Title>Welcome back, Fernando</Title>
        <span>{`You've got ${todos.size} tasks coming up in the next days.`}</span>
      </Header>
    </>
  )
}
