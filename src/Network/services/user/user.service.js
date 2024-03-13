import { LOADER_HANDLER_TYPES, METHOD_TYPES } from '@/Utils/constants'

export const changePasswordService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/change-password',
      method: METHOD_TYPES.post,
      body: payload
    })
  })
)

export const logoutService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/logout',
      method: METHOD_TYPES.post,
      body: {}
    })
  })
)

export const fetchProfileInfoService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/get-details',
      method: METHOD_TYPES.post,
      body: {},
      showApiSuccessMessage: false,
      loader: LOADER_HANDLER_TYPES.screen
    })
  })
)
