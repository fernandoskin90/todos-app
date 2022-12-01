import { fetchTodos } from '@/services'
import { Todo } from '@/types'

const todosMap: Todo = new Map()

export const setTodosMapOnLocalStorage = async (): Promise<void> => {
  const { data } = await fetchTodos()
  data.map((item) => {
    return todosMap.set(item.id, item)
  })

  localStorage.testMap = JSON.stringify(Array.from(todosMap.entries()))
  // const hola = new Map(JSON.parse(localStorage.testMap))
  // console.log(hola)
}
