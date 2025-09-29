import { configureStore } from '@reduxjs/toolkit'

// Example counter slice
import projectSlice from '../container/project/projectSlice'

export const store = configureStore({
  reducer: {
    projects: projectSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
