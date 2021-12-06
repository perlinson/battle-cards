import { Game } from '../api/game/'

const API = {
  version: 1.0,
  evts: {
    users: {
      data: ['']
    },
    userJoined: {
      data: ''
    },
    userLeft: {
      data: ''
    }
  },
  methods: {
    join: {
      msg: {
        gameId: '',
        user: {}
      },
      resp: {
        gameId: '',
        users: [{}]
      }
    },
    leave: {
      msg: {
        room: '',
        user: ''
      }
    }
  }
}

export default function Svc(socket, io) {
  return Object.freeze({
    getAPI() {
      console.log('getAPI')
      return API
    },
    // join(roomid, gameid) {
    //   Game.findById(gameid, (err, game) => {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       const namespace = `rooms/${gameid}`
    //       socket.join(namespace)
    //       socket.to(namespace).emit('userJoined', {
    //         game: game.toJSON(),
    //         roomid
    //       })
    //     }
    //   })
    // },
    join({ gameId, user }) {
      const fndGame = Game.findById({ gameId })
      if (!fndGame.players) {
        fndGame.players = []
      }
      fndGame.addPlayer(user)

      const namespace = `games/${gameId}`
      socket.once('disconnect', () => {
        this.leave({ gameId, user })
      })

      // socket.io v3: socket.join now synchronous
      socket.join(namespace)
      socket.to(namespace).emit('', { data: user })
      socket.to(namespace).emit('users', { data: fndGame.players })
      socket.emit('users', { data: fndGame.users })
      return {
        gameId,
        channels: fndGame.channels.map(({ name }) => name)
      }
    },
    leave({ gameId, user }) {
      const fndGame = Game.findById({ gameId })

      if (!fndGame) {
        throw new Error(`game ${gameId} not found`)
      }

      if (fndGame.users && fndGame.users.includes(user)) {
        const userIdx = fndGame.users.findIndex((u) => u === user)
        fndGame.users.splice(userIdx, 1)
      }

      const namespace = `rooms/${gameId}`
      // socket.io v3: socket.leave now synchronous
      socket.leave(namespace)
      socket.to(namespace).emit('userLeft', { data: user })
      socket.to(namespace).emit('users', { data: fndGame.users })
      socket.emit('users', { data: fndGame.users })
    }
  })
}
