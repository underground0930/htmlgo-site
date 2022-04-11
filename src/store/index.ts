import { configureStore } from '@reduxjs/toolkit'
import panelTypeReducer from '../slice/panel'

const store = configureStore({
  reducer: {
    panelType: panelTypeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
