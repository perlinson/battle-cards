const uri = 'api/cards/'

export const state = () => ({
  cards: [],
  currentCard: null,
  currentCard_doHover: {},
  currentCard_loading: true
})

export const mutations = {
  SET_CARDS: (state, cards) => (state.cards = cards),
  CREATE_CARD: (state, card) => state.cards.unshift(card),
  UPDATE_CARD: (state, updatedCard) => {
    const index = state.cards.findIndex((t) => t.id === updatedCard.id)
    if (index !== -1) {
      state.cards.splice(index, 1, updatedCard)
    }
  },
  DELETE_CARD: (state, card) =>
    (state.cards = state.cards.filter((t) => card.id !== t.id)),

  setCurrentCard(state, card) {
    if (state.currentCard_doHover[card.id]) {
      state.currentCard = card
    }
  },
  setCurrentCard_doHover(state, card) {
    state.currentCard_doHover[card.id] = true
  },
  resetCurrentCard_doHover(state, card) {
    state.currentCard_doHover[card.id] = false
  }
}

export const getters = {
  allCards: (state) => state.cards,
  currentCard: (state) => state.currentCard,
  selectedCard: (state) => state.cards.find((card) => card.id === state.card.id)
}

export const actions = {
  async fetchCards({ commit, $axios }) {
    const response = await $axios.get(uri)
    commit('SET_CARDS', response.data)
  },
  async addCard({ commit, $axios }, card) {
    const response = await $axios.post(uri, card)
    commit('CREATE_CARD', response.data)
  },
  async updateCard({ commit, $axios }, card) {
    const response = await $axios.put(`${uri}${card.id}`, card)
    commit('UPDATE_CARD', response.data)
  },
  async removeCard({ commit, $axios }, card) {
    await $axios.delete(`${uri}${card.id}`)
    commit('DELETE_CARD', card)
  }

  // preview Card
}
