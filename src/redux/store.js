import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlices'

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})

export default store
