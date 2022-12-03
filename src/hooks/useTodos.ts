import { fetchTodos, selectTodos } from '@/features/todo'
import { useAppDispatch, useAppSelector } from '@/store'
import { useEffect } from 'react'

export const useTodos = () => {
  const dispatch = useAppDispatch()
  const {
    todos: { todos, error, loading },
  } = useAppSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return {
    todos,
    error,
    loading,
  }
}
