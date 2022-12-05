import { v4 as uuidv4 } from 'uuid'
import { fetchTodos } from '@/services'
import { Todo } from '@/types'

const todosMap: Todo = new Map()

export const setTodosMapOnLocalStorage = async (): Promise<any> => {
  const todos = new Map(JSON.parse(localStorage.testMap) as Todo)
  console.log(!todos)
  if (!todos) return null
  const { data } = await fetchTodos()
  for (const item of data) {
    const id = uuidv4()
    todosMap.set(id, item)
  }

  localStorage.testMap = JSON.stringify(Array.from(todosMap.entries()))
}

export const getTodosFromLocalStorage = async (): Promise<Todo> => {
  return await new Promise((resolve, reject) => {
    try {
      const todos = new Map(JSON.parse(localStorage.testMap) as Todo)
      setTimeout(() => {
        resolve(todos)
      }, 500)
    } catch (error) {
      reject(error)
    }
  })
}

export const updateLocalStorage = (todo: Todo): void => {
  localStorage.testMap = JSON.stringify(Array.from(todo.entries()))
}
