import { ITodo } from '@/types'
import axios, { AxiosResponse } from 'axios'

export const fetchTodos = async (): Promise<AxiosResponse<ITodo[]>> => {
  return await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
}
