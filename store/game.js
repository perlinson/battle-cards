// export const state = () => ({
//   resources: {
//     order: 1000,
//     people: 100,
//     gold: 100,
//     wood: 100,
//     stone: 100,
//     ore: 100,
//     food: 100,
//     mana: 100,
//     artefact: 3
//   },

//   headers: {
//     kingdom: require('@/assets/headers/kingdom.png'),
//     volcano: require('@/assets/headers/volcano.png'),
//     pass: require('@/assets/headers/wall.png'),
//     expedition: require('@/assets/headers/expedition.png'),
//     valley: require('@/assets/headers/valley.png')
//   },

//   locations: [
//     {
//       title: 'volcano', // заголовок карточки. идентифткатор для локализвтора (/locales/ru.json и /locales/en.json)
//       image: 'volcano', // изображение в шапке. идентификатор из объекта $store.state.headers
//       kind: 'Card', // имя компонента, для отображения. в данном случае - универсальный, но могуцт быть и уникальные, например Expedition
//       objects: [
//         // список и описанте объектов, отображаемых на вкладке объектов карточки.
//       ],
//       units: [
//         // список всех юнитов на этой локации. как своих (owner = 'kingdom') так и чужих
//       ],
//       info: {
//         // художественное описание, тип и запас ресурсов данной локации
//         text: 'volcanoInfo',
//         placeFree: 0,
//         placeTotal: 3,
//         resources: {
//           stone: 5346,
//           wood: 10000,
//           ore: 464,
//           gold: 100
//         }
//       }
//     },
//     {
//       title: 'kingdomCity',
//       image: 'kingdom',
//       kind: 'Card',
//       objects: [],
//       units: [],
//       info: {
//         text: 'kingdomCityInfo',
//         placeFree: 0,
//         placeTotal: 3,
//         resources: {
//           stone: 5346,
//           ore: 464,
//           gold: 100,
//           food: 3000
//         }
//       }
//     },
//     {
//       title: 'kingdomValley',
//       image: 'valley',
//       kind: 'Card',
//       objects: [
//         {
//           type: 'farm',
//           owner: 'kingdom',
//           level: 2,
//           orders: 0,
//           autoOrder: false,
//           action: 'farming',
//           timer: 5
//         },
//         {
//           type: 'field',
//           owner: 'kingdom',
//           level: 2,
//           orders: 0,
//           autoOrder: false,
//           action: 'cultivation',
//           timer: 5
//         },
//         {
//           type: 'village',
//           owner: 'kingdom',
//           level: 2,
//           orders: 0,
//           autoOrder: false,
//           action: 'population',
//           timer: 5
//         }
//       ],
//       units: [],
//       info: {
//         text: 'kingdomValleyInfo',
//         placeFree: 0,
//         placeTotal: 3,
//         resources: {
//           stone: 5346,
//           ore: 464,
//           gold: 100,
//           food: 3000
//         }
//       }
//     },
//     {
//       title: 'pass',
//       image: 'pass',
//       kind: 'Card',
//       objects: [],
//       units: [],
//       info: {
//         text: 'passInfo',
//         placeFree: 0,
//         placeTotal: 3,
//         resources: {
//           stone: 5346,
//           ore: 464,
//           gold: 100
//         }
//       }
//     },
//     {
//       title: 'expedition',
//       image: 'expedition',
//       kind: 'Expedition',
//       text: 'expeditionInfo',
//       resources: {
//         people: 10,
//         stone: 30,
//         ore: 10,
//         gold: 100
//       }
//     }
//   ]
// })

export const state = () => ({
  currentPlayer: null,
  currentGame: null,
  messages: [],
  connected: false
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
  }
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
  playerHand: (state) => (state.currentPlayer && state.currentPlayer.hand) || []
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
                player_name: localStorage.user_name
              }
            }
          ]
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
              player_name: localStorage.user_name
            }
          }
        ]
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
  }
}
