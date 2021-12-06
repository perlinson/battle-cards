export default function Svc(socket, io) {
  return Object.freeze({
    getNamespaces: () => {
      return Object.keys(io.nsps)
    }
  })
}
