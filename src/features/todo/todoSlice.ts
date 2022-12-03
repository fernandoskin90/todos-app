import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
import { RootState } from '@/store'
import { Todo } from '@/types'
import { getTodosFromLocalStorage } from '@/utilities'

enum Loading {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

interface InititalState {
  loading: Loading
  todos: Todo
  error: string | null | unknown
}

enableMapSet()

const initialState: InititalState = {
  loading: Loading.IDLE,
  todos: new Map(),
  error: null,
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getTodosFromLocalStorage()
      return todos
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      console.log(state, payload)
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        if (state.loading === Loading.IDLE) {
          state.loading = Loading.PENDING
        }
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.loading = Loading.FULFILLED
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = Loading.REJECTED
        state.error = action.payload
      })
  },
})

export const { addTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state

export default todoSlice.reducer
