import { getMe } from '@/apis/auth.api'
import { queryOptions } from '@tanstack/vue-query'

export const getMeQueryOptions = () => {
  return queryOptions({
    queryKey: ['me'],
    queryFn: getMe
  })
}
