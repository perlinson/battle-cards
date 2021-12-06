const API = {
  version: '1.0.0',
  methods: {
    join: {},
    leave: {}
  }
}
const namespace = 'index'

export default function (socket, io) {
  const gameNsp = io.of(`/${namespace}`)
  const broadcastUsers = () => {
    const sids = gameNsp.adapter.sids
    gameNsp.emit('game/updateUsers', [...sids.keys()])
  }
  const roomSvc = Object.freeze({
    getAPI() {
      return API
    },

    getMessage(msg) {
      console.log('broadcast', msg)
      const recvMsg = 'from server: ' + msg
      const namespace = 'rooms/nuxtjs'
      socket.broadcast
        .to(namespace)
        .emit('chatMessage', `${socket.id} recvMsg: ${recvMsg}`)
    },
    join() {
      console.log(io)
      console.log('join')
      broadcastUsers()

      const namespace = 'rooms/nuxtjs'
      socket.join(namespace)
      socket.broadcast.to(namespace).emit('chatMessage', `${socket.id} joined`)
      socket.emit('chatMessage', `${socket.id} joined`)
      socket.once('disconnect', () => {
        roomSvc.leave()
      })
    },
    leave() {
      console.log('leave')
      const namespace = 'rooms/nuxtjs'
      socket.leave(namespace)
      //   socket.to().emit('chatMessage', `${socket.id} left`);
      //   socket.broadcast.emit('chatMessage', `${socket.id} left`);
      socket.broadcast.to(namespace).emit('chatMessage', `${socket.id} left`)
    }
  })
  return roomSvc
}
