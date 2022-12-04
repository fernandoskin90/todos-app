import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export const HeaderDescription = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const todosFiltered = Array.from([...todos.values()]).filter(
    (todo) => !todo.completed
  )
  return (
    <span>{`You've got ${todosFiltered.length} tasks coming up in the next days.`}</span>
  )
}
