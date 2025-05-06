<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white px-4 py-8 shadow-sm sm:rounded-lg sm:px-10">
      <form class="space-y-6" novalidate @submit="submitForm">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <div class="mt-1">
            <input
              id="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              v-model="username"
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 focus:outline-hidden sm:text-sm"
            />
            <div v-if="errors.username" class="mt-1 text-sm text-red-600">
              {{ errors.username }}
            </div>
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 focus:outline-hidden sm:text-sm"
            />
            <div v-if="errors.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/apis/auth.api'
import { loginSchema, type TLoginSchema } from '@/schemas/auth.schema'
import type { TLoginPayload } from '@/types/auth.type'
import { setAccessTokenToLocalStorage } from '@/utils/localStorage'
import { useMutation } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'

const router = useRouter()

const { defineField, errors, handleSubmit, setFieldError } = useForm<TLoginSchema>({
  validationSchema: loginSchema,
  initialValues: {
    username: 'emilys',
    password: 'emilyspass'
  }
})

const loginMutation = useMutation({
  mutationFn: (values: TLoginPayload) => login(values)
})

const [username] = defineField('username')
const [password] = defineField('password')

const submitForm = handleSubmit((values) => {
  loginMutation.mutate(values, {
    onSuccess: (response) => {
      const { accessToken } = response.data
      setAccessTokenToLocalStorage(accessToken)
      router.push({ name: 'top' })
    },
    onError: (error) => {
      const errorMessage = (error as AxiosError<{ message: string }>).response?.data.message
      setFieldError('password', errorMessage)
    }
  })
})
</script>
