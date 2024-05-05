import { defineStore } from 'pinia'
export const userInfoStore = defineStore('userInfoStore', {
  state: (): UserInfo => ({
    userName: '',
    email: ''
  }),
  actions: {
    setUsername(userName: string) {
      this.userName = userName
      return true
    },
    setEmail(email: string) {
      this.email = email
      return true
    }
  },
  getters:{
    getUserName(state): string {
      return state.userName
  },
    getEmail(state): string {
      return state.email
  }
  }
})
