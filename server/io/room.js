import { Game } from '../api/game/'
import { success, notFound } from '../services/response/'

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
  const roomSvc = Object.freeze({
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
    async join({ gameId, user }) {
      console.log('join')

      const fndGame = await Game.findById(gameId)
      fndGame.addPlayer(user)

      const namespace = `games/${gameId}`
      socket.once('disconnect', () => {
        roomSvc.leave({ gameId, user })
      })

      // socket.io v3: socket.join now synchronous
      socket.join(namespace)
      socket.to(namespace).emit('useJoined', { data: user })
      socket.to(namespace).emit('users', { data: fndGame.players })
      socket.emit('users', { data: fndGame.players })
    },
    leave({ gameId, user }) {
      const fndGame = Game.findById({ gameId })

      if (!fndGame) {
        throw new Error(`game ${gameId} not found`)
      }

      if (fndGame.players && fndGame.players.includes(user)) {
        const userIdx = fndGame.users.findIndex((u) => u === user)
        fndGame.players.splice(userIdx, 1)
      }

      const namespace = `games/${gameId}`
      // socket.io v3: socket.leave now synchronous
      socket.leave(namespace)
      socket.to(namespace).emit('userLeft', { data: user })
      socket.to(namespace).emit('users', { data: fndGame.players })
      socket.emit('users', { data: fndGame.players })
    }
  })
  return roomSvc
}
