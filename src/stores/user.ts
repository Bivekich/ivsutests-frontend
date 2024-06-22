import { defineStore } from 'pinia'
import axios from 'axios'

interface User {
  email: string
  role: string
}

interface UserState {
  token: string
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
    user: null
  }),
  actions: {
    async register(email: string, password: string) {
      try {
        const response = await axios.post('https://ivsutests-server.vercel.app/api/auth/register', {
          email,
          password
        })
        return response.data.message
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(error.response.data.message)
        } else {
          throw new Error('Произошла неизвестная ошибка')
        }
      }
    },
    async login(email: string, password: string) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          email,
          password
        })
        this.token = response.data.token
        localStorage.setItem('token', this.token)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(error.response.data.message)
        } else {
          throw new Error('Произошла неизвестная ошибка')
        }
      }
    },
    async fetchUserProfile() {
      try {
        const response = await axios.get('https://ivsutests-server.vercel.app/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.user = response.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(error.response.data.message)
        } else {
          throw new Error('Произошла неизвестная ошибка')
        }
      }
    },
    async createTest(title: string, questions: any[]) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/test/teacher/tests',
          { title, questions },
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        return response.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(error.response.data.message)
        } else {
          throw new Error('Произошла неизвестная ошибка')
        }
      }
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
