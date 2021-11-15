export const state = () => ({
  gameData: {
    field: [],
    hand: [],
    graveyard: [],
    deck: [],
    selectedCard: {
      image_url: 'oblisk.png',
    },
  },
})

export const mutations = {
  DRAW_CARD(state, card) {
    state.hand.push(card)
  },
  SET_PREVIEW_CARD(state, card) {
    state.selectedCard = { ...card }
    console.log(state.selectedCard)
  },
}

export const getters = {
  selectedCard(state) {
    return state.selectedCard
  },
}

export const actions = {
  draw_card({ commit }, card) {
    commit('DRAW_CARD', card)
  },
  preview_card({ commit }, card) {
    commit('SET_PREVIEW_CARD', card)
  },
}
