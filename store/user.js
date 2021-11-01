export const state = () => ({
  user_email: {
    type: String,
    default: ''
  }
})

export const mutations = {
  setUserInfo(state, user) {
    state.user_email = user.email
  }
}

export const getters = {
  roomList: (state) => state.list_rooms
}

export const actions = {
  async login({ commit }, loginData) {
    try {
      await this.$auth.loginWith('local', {
        data: loginData
      })
      commit('setUserInfo', loginData)
      this.$router.push('/')
    } catch (err) {
      console.log(err)
    }
  },
  async register({ commit }, registerData) {
    try {
      await this.$axios.$post('/api/auth/signin', {
        fullname: registerData.fullname,
        email: registerData.email,
        password: registerData.password
      })
    } catch (err) {
      console.log(err)
    }
  }
}
