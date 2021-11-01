export const state = () => ({
  decks: [],
  currDeckIndex: {
    type: Number,
    default: 0
  }
})

export const mutations = {
  setItems(state, lists) {
    state.decks = lists
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
  }
}

export const getters = {
  decks: (state) => state.decks,
  currDeck: (state) => {
    if (state.decks.length > 0) return state.decks[state.currDeckIndex]
  }
}

export const actions = {
  async getDeckList({ commit }) {
    commit('showLoading')

    try {
      await this.$axios.$get('/api/deck/').then((result) => {
        commit('setItems', result.data)
        commit('hideLoading')
      })
    } catch (err) {
      console.log(err)
    }
  },
  async joinDeck({ commit }, deck) {
    commit('showLoading')
    try {
      await this.$axios
        .$patch(`/api/deck/${deck._id}`, {
          players: [
            deck.data.players[0],
            {
              player2: {
                player_name: localStorage.user_name
              }
            }
          ]
        })
        .then((result) => {
          this.$router.push({ path: '/startgame/' + deck._id })
        })
    } catch (err) {
      console.log(err)
    }
  },
  async createDeck({ commit, dispatch, rootState }, deckName) {
    await this.$axios
      .$post('/api/deck/create', {
        email: rootState.auth.user.email,
        deckName
      })
      .then((response) => {
        dispatch('getDeckList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  },

  async updateDeck({ commit, dispatch }, event) {
    const formdata = new FormData(event.target)
    const deckName = formdata.get('nameDeck')
    await this.$axios
      .$post('/api/deck/createDeck', {
        deck_name: deckName
      })
      .then((response) => {
        dispatch('getDeckList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  }
}
