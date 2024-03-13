import api from '@/Network/api'
import { changePasswordService, createTicketService, fetchProfileInfoService, fetchSearchResultsService, fetchUsersListService, logoutService, setScoreService, syncUserBalanceService } from './user.service'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    changePassword: changePasswordService(build),
    logOut: logoutService(build),
    fetchProfileInfo: fetchProfileInfoService(build),
    fetchUsersList: fetchUsersListService(build),
    setUserScore: setScoreService(build),
    syncUserBalance: syncUserBalanceService(build),
    fetchSearchResults: fetchSearchResultsService(build),
    createTicket: createTicketService(build)
  }),
  overrideExisting: false
})

export const {
  useChangePasswordMutation,
  useLogOutMutation,
  useFetchProfileInfoMutation,
  useLazyFetchUsersListQuery,
  useSetUserScoreMutation,
  useSyncUserBalanceMutation,
  useFetchSearchResultsMutation,
  useCreateTicketMutation
} = userApi
