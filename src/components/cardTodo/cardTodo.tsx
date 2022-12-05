import { updateTodo } from '@/features/todo'
import { deleteTodo } from '@/features/todo/todoSlice'
import { RootState, useAppDispatch } from '@/store'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  ActionsTodo,
  CheckButton,
  Todo,
  TodoText,
  TrashButton,
} from './cardtodo.styles'

interface Props {
  todoId: string
}
export const CardTodo: FC<Props> = ({ todoId }) => {
  const dispatch = useAppDispatch()
  const todo = useSelector((state: RootState) => state.todos.todos.get(todoId))
  if (!todo) return null
  return (
    <Todo>
      <TodoText primary={todo?.title} completed={todo?.completed} />
      <ActionsTodo>
        <TrashButton onClick={() => dispatch(deleteTodo(todoId))} />
        <CheckButton
          onClick={() => {
            dispatch(updateTodo(todoId))
          }}
        />
      </ActionsTodo>
    </Todo>
  )
}
