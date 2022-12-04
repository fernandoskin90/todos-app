import { updateTodo } from '@/features/todo'
import { RootState, useAppDispatch } from '@/store'
import { FC } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  todoId: string
}
export const CardTodo: FC<Props> = ({ todoId }) => {
  const dispatch = useAppDispatch()
  const todo = useSelector((state: RootState) => state.todos.todos.get(todoId))
  return (
    <div>
      <div className=''>
        <div>
          <h4>{todo?.title}</h4>
          <span>{JSON.stringify(todo?.completed)}</span>
          <button
            onClick={() => {
              dispatch(updateTodo(todoId))
            }}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  )
}
