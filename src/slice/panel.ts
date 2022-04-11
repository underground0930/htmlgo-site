import { createSlice } from '@reduxjs/toolkit'
import type { PanelType } from '../types'

const initialState: {
  value: PanelType
} = {
  value: 'tile',
}

export const panelTypeSlice = createSlice({
  name: 'panelType',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setType } = panelTypeSlice.actions
export default panelTypeSlice.reducer
