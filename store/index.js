export const state = () => ({
  chatMessages: '',
  titleFromUser: '',
})

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn // auth object as default will be added in vuex state, when you initialize nuxt auth
  },
  getUserInfo(state) {
    return state.auth.user
  },
}

export const mutations = {
  SET_MESSAGE(state, chatMessage) {
    state.chatMessages += chatMessage
  },
}

export const actions = {
  FORMAT_MESSAGE({ commit }, chatMessage) {
    const chatMessageFmt = `${new Date().toLocaleString()}: ${chatMessage}\r\n`
    commit('SET_MESSAGE', chatMessageFmt)
  },
}
