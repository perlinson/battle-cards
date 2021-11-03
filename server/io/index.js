// An example svc:

export default function Svc(socket, io) {
  return Object.freeze({
    getMessage(msg) {
      console.log(msg, socket.id)
    }
  })
}
