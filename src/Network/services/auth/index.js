import api from '@/Network/api'
import {
  fetchAppCurrentVersion, fetchUserInfoService, userCompleteProfileService, userLoginService,
  userRefreshTokenService, userUpdateProfileService
} from './auth.service'

export const authApis = api.injectEndpoints({
  endpoints: build => ({
    loginUser: userLoginService(build),
    fetchAppVersion: fetchAppCurrentVersion(build),
    completeUserProfile: userCompleteProfileService(build),
    refreshUserToken: userRefreshTokenService(build),
    updateUserProfile: userUpdateProfileService(build),
    fetchUserDetails: fetchUserInfoService(build)
  }),
  overrideExisting: false
})

export const {
  useLoginUserMutation, useLazyFetchAppVersionQuery, useCompleteUserProfileMutation, useRefreshUserTokenMutation,
  useUpdateUserProfileMutation, useLazyFetchUserDetailsQuery
} = authApis
