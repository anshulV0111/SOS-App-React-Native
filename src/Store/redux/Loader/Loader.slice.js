import { LOADER_HANDLER_TYPES } from '@/Utils/constants'
import { createSlice } from '@reduxjs/toolkit'

const defaultLoadersState = {
  [LOADER_HANDLER_TYPES.screen]: false,
  [LOADER_HANDLER_TYPES.appLoader]: false
}

const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState: defaultLoadersState,
  reducers: {
    startLoader: (state, action) => {
      return {
        ...state,
        [action.payload]: true
      }
    },
    stopLoader: (state, action) => {
      return {
        ...state,
        [action.payload]: false
      }
    }
  }
})

export const { startLoader, stopLoader } = loaderSlice.actions

export default loaderSlice.reducer
