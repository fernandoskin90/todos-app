import { CardTodo } from '@/components'
import { useTodos } from '@/hooks'
import {
  ButtonNewTodo,
  ContainerHome,
  HomeTitle,
  ListItems,
} from './home.styles'

export function Home() {
  const { todosIds } = useTodos()
  return (
    <ContainerHome maxWidth='xl'>
      <HomeTitle>
        <h3>Todos</h3>
        <ButtonNewTodo size='small' variant='text'>
          Add Todo
        </ButtonNewTodo>
      </HomeTitle>
      <ListItems>
        {todosIds.map((id) => (
          <CardTodo key={id} todoId={id} />
        ))}
      </ListItems>
    </ContainerHome>
  )
}
