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
      console.log(loginData)

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
      await this.$axios.$post('/api/users/', {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password
      })
    } catch (err) {
      console.log(err)
    }
  }
}
