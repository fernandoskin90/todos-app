import { fetchTodos } from '@/features/todo'
import { RootState, useAppDispatch } from '@/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useTodos = () => {
  const dispatch = useAppDispatch()
  const error = useSelector((state: RootState) => state.todos.error)
  const loading = useSelector((state: RootState) => state.todos.loading)
  const todosIds = useSelector((state: RootState) => state.todos.todosIds)

  useEffect(() => {
    console.log('useEffect')
    dispatch(fetchTodos())
  }, [])

  return {
    error,
    loading,
    todosIds,
  }
}
