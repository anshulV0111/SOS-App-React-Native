import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithInterceptor from '../interceptor'

const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({})
})

export default api
