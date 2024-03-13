import i18n from 'i18next'
import { setAuthToken, setRefreshToken, setUser } from '@/Store/redux/Auth/Auth.slice'
import { startLoader, stopLoader } from '@/Store/redux/Loader/Loader.slice'
import { AUTH_TOKEN, METHOD_TYPES, REFRESH_TOKEN, SNACKBAR_TYPE } from '@/Utils/constants'
import { clearAsyncStorage } from '@/Utils/services/AsyncStorage.service'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from '@/Config/app.config'
import { handleShowToast } from '@/Utils/helpers/toast.helpers'

const handleHeaderConfigs = async (headers, { getState, endpoint }) => {
  if (!headers.map.handlerenabled) {
    headers.map.handlerenabled = 'true'
  }
  headers.map['X-localization'] = getState().auth.language

  const handlerEnabled = headers.map.handlerenabled

  if (handlerEnabled === 'true') {
    const authorizationToken = getState().auth[AUTH_TOKEN]
    headers.set('authorization', `Bearer ${authorizationToken}`)
  }

  return headers
}

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: handleHeaderConfigs,
  credentials: 'include'
})

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  const { [REFRESH_TOKEN]: refreshToken, user } = api.getState().auth

  if (!('showApiSuccessMessage' in args)) {
    args.showApiSuccessMessage = true
  }
  if (!('customSuccessMessage' in args)) {
    args.customSuccessMessage = ''
  }
  if ('loader' in args) {
    api.dispatch(startLoader(args.loader))
  }

  const { showApiSuccessMessage, customSuccessMessage } = args

  if (result.error) {
    if ('loader' in args) {
      api.dispatch(stopLoader(args.loader))
    }

    if (result.error.data.code === 500 || result.error.status === 500) {
      handleShowToast({
        status: SNACKBAR_TYPE.error,
        description: result.error?.data?.message || i18n.t('internalServerError')
      })
    } else if (result.error.data.code !== 401 || result.error.status !== 401) {
      handleShowToast({
        status: SNACKBAR_TYPE.error,
        description: result.error.data.message || i18n.t('somethingWentWrong')
      })
    } else if (result.error.data.code === 401 || result.error.status === 401) {
      // here you can deal with 401 error
      if (refreshToken && user) {
        const requestPayload = {
          refreshToken,
          email: user?.email || '',
          device: user?.device || ''
        }
        await baseQuery({
          url: '/user/refresh',
          method: METHOD_TYPES.post,
          body: requestPayload,
          responseHandler: async (res) => {
            const newAccessToken = res.headers.map.accesstoken
            const newRefreshToken = res.headers.map.refreshtoken
            if (newAccessToken && newRefreshToken) {
              api.dispatch(setAuthToken(newAccessToken))
              api.dispatch(setRefreshToken(newRefreshToken))
              result = await baseQuery(args, api, extraOptions)
            } else {
              await clearAsyncStorage()
              api.dispatch(setAuthToken(null))
              api.dispatch(setRefreshToken(null))
              api.dispatch(setUser(null))
            }
          }
        }, api, extraOptions)
      } else {
        await clearAsyncStorage()
        api.dispatch(setAuthToken(null))
        api.dispatch(setRefreshToken(null))
        api.dispatch(setUser(null))
      }
    }
  }

  if (result.data) {
    if ('loader' in args) {
      api.dispatch(stopLoader(args.loader))
    }
    const message = result.data.message
    if (customSuccessMessage) {
      handleShowToast({
        status: SNACKBAR_TYPE.success,
        description: customSuccessMessage
      })
    } else if (message && showApiSuccessMessage) {
      handleShowToast({
        status: SNACKBAR_TYPE.success,
        description: message
      })
    }
  }
  return result
}

export default baseQueryWithInterceptor
