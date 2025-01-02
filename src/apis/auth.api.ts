import type { TLoginPayload, TLoginResponse } from '@/types/auth.type'
import type { TSuccessResponseApi } from '@/types/utils.type'
import http from '@/utils/http'

export const login = (body: TLoginPayload) => http.post<TSuccessResponseApi<TLoginResponse>>('/login', body)
