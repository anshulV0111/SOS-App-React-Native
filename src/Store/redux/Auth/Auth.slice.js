import { AUTH_TOKEN, REFRESH_TOKEN } from '@/Utils/constants'
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: null,
    [AUTH_TOKEN]: null,
    language: 'en',
    isProfileCompleted: false,
    [REFRESH_TOKEN]: null,
    contacts: []
  },
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        user: payload
      }
    },
    setAuthToken: (state, { payload }) => {
      return {
        ...state,
        [AUTH_TOKEN]: payload
      }
    },
    setRefreshToken: (state, { payload }) => {
      return {
        ...state,
        [REFRESH_TOKEN]: payload
      }
    },
    setAppLanguage: (state, { payload }) => {
      return {
        ...state,
        language: payload.language
      }
    },
    setIsProfileCompleted: (state, { payload }) => {
      return {
        ...state,
        isProfileCompleted: payload
      }
    },
    setContacts: (state, { payload }) => {
      return {
        ...state,
        contacts: payload
      }
    }
  }
})

export const { setUser, setAuthToken, setRefreshToken, setAppLanguage, setIsProfileCompleted, setContacts } = authSlice.actions

export default authSlice.reducer
