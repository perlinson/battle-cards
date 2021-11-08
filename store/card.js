export const state = () => ({
  cards: [],
  select: {
    type: Number,
    default: 0,
  },

  selectedCard: null,
})

export const mutations = {
  setItems(state, lists) {
    state.cards = lists
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
  },
}

export const getters = {
  cards: (state) => state.cards,
  currCard: (state) => {
    if (state.cards.length > 0) return state.cards[state.currCardIndex]
  },
  selectedCard(state) {
    return state.cards.find(function (project) {
      return project.id === state.selectedProjectId
    })
  },
}

export const actions = {
  async getCardList({ commit }) {
    commit('showLoading')

    try {
      await this.$axios.$get('/api/cards/').then((result) => {
        commit('setItems', result.data)
        commit('hideLoading')
      })
    } catch (err) {
      console.log(err)
    }
  },
  async joinCard({ commit }, card) {
    commit('showLoading')
    try {
      await this.$axios
        .$patch(`/api/cards/${card._id}`, {
          players: [
            card.data.players[0],
            {
              player2: {
                player_name: localStorage.user_name,
              },
            },
          ],
        })
        .then((result) => {
          this.$router.push({ path: '/startgame/' + card._id })
        })
    } catch (err) {
      console.log(err)
    }
  },
  async createCard({ commit, dispatch, rootState }, cardName) {
    await this.$axios
      .$post('/api/cards/create', {
        email: rootState.auth.user.email,
        cardName,
      })
      .then((response) => {
        dispatch('getCardList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  },

  async updateCards({ commit, dispatch }, cards) {
    await this.$axios
      .$post('/api/cards/all', {
        cards,
      })
      .then((response) => {
        debugger
        dispatch('getCardList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        debugger

        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  },
}
