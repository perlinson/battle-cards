import axios from 'axios'

export const state = () => ({
  currentPlayer: null,
  currentGame: null,
  messages: [],
  connected: false,
})

export const mutations = {
  setConnected(state, isConnected) {
    state.connected = isConnected
  },
  setCurrentPlayer(state, currentPlayer) {
    state.currentPlayer = currentPlayer
  },
  setCurrentGame(state, currentGame) {
    state.currentGame = currentGame
  },
}

export const getters = {
  isConnected: (state) => state.connected,
  hasCurrentPlayer: (state) => state.currentPlayer,
  currentPlayer: (state) => state.currentPlayer,
  hasCurrentGame: (state) => !!state.currentGame,
  players: (state) => (state.currentGame && state.currentGame.players) || [],
  hasPlayersInCurrentGame: (state) =>
    state.currentGame &&
    state.currentGame.players &&
    state.currentGame.players.length > 0,
  canStartGame: (state) =>
    state.currentGame &&
    state.currentGame.players &&
    state.currentGame.players.length > 1,
  currentGame: (state) => state.currentGame,
  playedCards: (state) =>
    (state.currentGame && state.currentGame.playedCards) || [],
  hasPlayedCards: (state) =>
    state.currentGame &&
    state.currentGame.playedCards &&
    state.currentGame.playedCards.length > 0,
  currentGameUrl: (state) => {
    if (!state.currentGame) {
      return ''
    }
    return `/user/topic/game/${state.currentGame.id}`
  },
  gameCode: (state) => (state.currentGame && state.currentGame.name) || 'None',
  isGameOver: (state) => state.currentGame && state.currentGame.gameOver,
  isGameStarted: (state) => state.currentGame && state.currentGame.started,
  didGameLevelUp: (state) => state.currentGame && state.currentGame.levelUp,
  lives: (state) => (state.currentGame && state.currentGame.lives) || -1,
  ninjaStars: (state) =>
    (state.currentGame && state.currentGame.ninjaStars) || -1,

  playerName: (state) =>
    (state.currentPlayer && state.currentPlayer.username) || 'None',
  playerHand: (state) =>
    (state.currentPlayer && state.currentPlayer.hand) || [],
}

export const actions = {
  async getGameList({ commit }) {
    commit('showLoading')

    try {
      await this.$axios.$get('/api/game/').then((result) => {
        commit('setItems', result.data)
        commit('hideLoading')
      })
    } catch (err) {
      console.log(err)
    }
  },
  async joinGame({ commit }, game) {
    commit('showLoading')
    try {
      await this.$axios
        .$patch(`/api/game/${game._id}`, {
          players: [
            game.data.players[0],
            {
              player2: {
                player_name: localStorage.user_name,
              },
            },
          ],
        })
        .then((result) => {
          this.$router.push({ path: '/startgame/' + game._id })
        })
    } catch (err) {
      console.log(err)
    }
  },
  async createGame({ commit, dispatch }, event) {
    const formdata = new FormData(event.target)
    const gameName = formdata.get('nameGame')
    await this.$axios
      .$post('/api/game/createGame', {
        game_name: gameName,
        players: [
          {
            player1: {
              player_name: localStorage.user_name,
            },
          },
        ],
      })
      .then((response) => {
        dispatch('getGameList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  },
}
