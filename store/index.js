export const state = () => ({
  isLandscape: undefined,
  gameStatus: undefined,
  playersTurn: undefined,
  myPlayer: undefined,
  opponent: undefined,
  selectedCard: undefined,
  showModal: undefined
})

export const getters = {
  myPlayerId: (state) => {
    return state.myPlayer !== undefined && state.myPlayer.playerId
  },

  opponentPlayerId: (state) => {
    return state.opponent !== undefined && state.opponent.playerId
  },

  isMyTurn: (state) => {
    return getters.myPlayerId === state.playersTurn
  },

  hasSelectedCard: (state) => state.selectedCard !== undefined,

  myPlayerHasSummoned: (state) =>
    state.myPlayer !== undefined && state.myPlayer.hasSummoned,

  opponentsShieldsSize: (state) =>
    state.opponent !== undefined && state.opponent.shieldsSize,
  opponentsMonsters: (state) =>
    state.opponent !== undefined && state.opponent.monsters,

  myPlayerHasTrapInHand: (state) =>
    state.myPlayer !== undefined &&
    state.myPlayer.hand.find((card) => card.type === 'trap') !== undefined,

  myPlayerHasAttackMonster: (state) =>
    state.myPlayer !== undefined &&
    state.myPlayer.monsters.find((monster) => monster.canAttack) !== undefined,
  selectedCardId: (state) => {
    if (
      state.selectedCard !== undefined &&
      state.selectedCard.card !== undefined
    ) {
      return state.selectedCard.card.id
    }
    return undefined
  },

  endTurnIsOnlyMove: (state) =>
    getters.isMyTurn &&
    getters.myPlayerHasSummoned &&
    !getters.myPlayerHasTrapInHand &&
    !getters.myPlayerHasAttackMonster,

  isMyTrapPhase: (state) =>
    `${getters.myPlayerId}-TRAP_PHASE` === state.playersTurn,

  isOpponentTrapPhase: (state) =>
    `${getters.opponentPlayerId}-TRAP_PHASE` === state.playersTurn,

  myTraps: (state) => state.myPlayer !== undefined && state.myPlayer.traps,

  opponentAttackingMonsterName: (state) => {
    return (
      state.attackingMonsterId &&
      state.opponent.monsters.find(
        (monster) => monster.id === state.attackingMonsterId
      ).name
    )
  },

  attackingMonsterTarget: (state) => {
    if (state.attackingMonsterTarget === 'opponent') {
      return 'you'
    } else if (state.attackingMonsterTarget === 'shield') {
      return 'your shield'
    } else if (state.attackingMonsterTarget !== undefined) {
      return state.myPlayer.monsters.find(
        (monster) => monster.id === state.attackingMonsterTarget
      ).name
    }
    return ''
  }
}

export const mutations = {
  SET_IS_LANDSCAPE: (state, value) => (state.drawer = value),
  SET_GAME_STATUS: (state, value) => (state.image = value),
  SET_PLAYERS_TURN: (state, value) => (state.color = value),
  START_GAME: (state) => (state.drawer = !state.drawer),
  TURN_ENDED: (state) => (state.drawer = !state.drawer),
  OPPONENT_TURN_ENDED: (state) => (state.drawer = !state.drawer),
  SUMMONED: (state) => (state.drawer = !state.drawer),
  OPPONENT_SUMMONED: (state) => (state.drawer = !state.drawer),
  ATTACKED: (state) => (state.drawer = !state.drawer),
  OPPONENT_ATTACKED: (state) => (state.drawer = !state.drawer),
  TRAP_SET: (state) => (state.drawer = !state.drawer),
  OPPONENT_TRAP_SET: (state) => (state.drawer = !state.drawer),
  TRAP_PHASE: (state) => (state.drawer = !state.drawer),
  OPPONENT_TRAP_PHASE: (state) => (state.drawer = !state.drawer),
  REMOVE_OPPONENT_MONSTERS: (state) => (state.drawer = !state.drawer),
  REMOVE_MY_MONSTERS: (state) => (state.drawer = !state.drawer),
  REMOVE_MY_TRAP: (state) => (state.drawer = !state.drawer),
  REMOVE_OPPONENT_TRAP: (state) => (state.drawer = !state.drawer),
  SET_SELECTED_CARD: (state) => (state.drawer = !state.drawer),
  SET_SHOW_MODAL: (state) => (state.drawer = !state.drawer)
}

export const actions = {
  initiale_game({ commit, dispatch }) {},

  waitForOpponent({ commit, dispatch }) {
    commit('SET_GAME_STATUS', 'waitingForOpponent')
  }
}
