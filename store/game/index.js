export const state = () => ({
  gameData: {
    field: [],
    hand: [],
    graveyard: [],
    deck: [],
  },
})

export const mutations = {
  DRAW_CARD(state, card) {
    state.playerData.push(card)
  },
}

export const actions = {
  draw_card({ commit }, card) {
    commit('DRAW_CARD', card)
  },
}
