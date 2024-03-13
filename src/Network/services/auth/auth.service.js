import { METHOD_TYPES } from '@/Utils/constants'

export const userLoginService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/user/login',
      method: METHOD_TYPES.post,
      body: payload,
      transform: response => response,
      headers: {
        handlerenabled: false
      },
      showApiSuccessMessage: true
    }),
    transformResponse: (apiResponse, meta) => {
      const returnData = {
        ...apiResponse,
        data: {
          ...apiResponse.data,
          accessToken: meta.response.headers?.map?.accesstoken,
          refreshToken: meta.response.headers?.map?.refreshtoken
        }
      }
      return returnData
    }
  })
)

export const userRefreshTokenService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/user/refresh',
      method: METHOD_TYPES.post,
      body: payload,
      transform: response => response,
      headers: {
        handlerenabled: false
      },
      showApiSuccessMessage: false
      // customSuccessMessage: 'User Login Successfully !'
    }),
    transformResponse: (apiResponse, meta) => {
      const returnData = {
        ...apiResponse,
        data: {
          ...apiResponse.data,
          accessToken: meta.response.headers?.map?.accesstoken,
          refreshToken: meta.response.headers?.map?.refreshtoken
        }
      }
      return returnData
    }
  })
)

export const userCompleteProfileService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/user/completeProfile',
      method: METHOD_TYPES.put,
      body: payload,
      headers: {
        handlerenabled: true
      },
      showApiSuccessMessage: true
    })
  })
)

export const userUpdateProfileService = (build) => (
  build.mutation({
    query: (payload) => ({
      url: '/user/update',
      method: METHOD_TYPES.put,
      body: payload,
      headers: {
        handlerenabled: true
      }
    })
  })
)

export const fetchUserInfoService = build => (
  build.query({
    query: () => ({
      url: '/user',
      method: METHOD_TYPES.get,
      showApiSuccessMessage: false,
      headers: {
        handlerenabled: true
      }
    })
  })
)

export const fetchAppCurrentVersion = build => (
  build.query({
    query: () => ({
      url: '/app-version',
      method: METHOD_TYPES.get,
      showApiSuccessMessage: false
    })
  })
)
