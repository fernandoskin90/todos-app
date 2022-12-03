import { useEffect } from 'react'
import './App.css'
import { fetchTodos, selectTodos } from './features/todo'
import { useAppDispatch, useAppSelector } from './store'

function App() {
  const dispatch = useAppDispatch()
  const {
    todos: { todos, error, loading },
  } = useAppSelector(selectTodos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  console.log({ todos, error, loading })
  return <div className='App'></div>
}

export default App
