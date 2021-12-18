const uri = 'api/deck/'

export const state = () => ({
  decks: [],
  deck: {
    name: '',
    description: '',
    cards: []
  },
  selectedCards: []
})

export const mutations = {
  SET_DECKS: (state, decks) => (state.decks = decks),
  CREATE_DECK: (state, deck) => state.decks.unshift(deck),
  UPDATE_DECK: (state, updatedDeck) => {
    const index = state.decks.findIndex((t) => t.id === updatedDeck.id)
    if (index !== -1) {
      state.decks.splice(index, 1, updatedDeck)
    }
  },
  DELETE_DECK: (state, deck) =>
    (state.decks = state.decks.filter((t) => deck.id !== t.id)),
  ADD_SELECTED_CARD: (state, card) => {
    state.deck.cards.push(card)
  },
  DELECT_SELECT_CARD: (state, card) =>
    (state.deck.cards = state.deck.cards.filter((t) => card.id !== t.id))
}

export const getters = {
  allDecks: (state) => state.decks,
  currDeck: (state) => state.deck,
  selectedCards: (state) => state.selectedCards
}

export const actions = {
  async fetchDecks({ commit, $axios }) {
    const response = await $axios.get(uri)
    commit('SET_DECKS', response.data)
  },
  async addDeck({ commit, $axios }, deck) {
    const response = await $axios.post(uri, deck)
    commit('CREATE_DECK', response.data)
  },
  async updateDeck({ commit, $axios }, deck) {
    const response = await $axios.put(`${uri}${deck.id}`, deck)
    commit('UPDATE_DECK', response.data)
  },

  async removeDeck({ commit, $axios }, deck) {
    await $axios.delete(`${uri}${deck.id}`)
    commit('DELETE_DECK', deck)
  },
  addSelectedCard({ commit }, card) {
    commit('ADD_SELECTED_CARD', card)
  },
  removeSelectCard({ commit }, card) {
    commit('DELECT_SELECT_CARD', card)
  }
}
