import http from 'http'
import { Nuxt, Builder } from 'nuxt'
import consola from 'consola'
import config from '../nuxt.config'
import { mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const app = express(apiRoot, api)
const server = http.createServer(app)

if (mongo.uri) {
  mongoose.connect(mongo.uri)
}
mongoose.Promise = Promise

async function start() {
  const nuxt = new Nuxt(config)
  // await nuxt.listen()

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  setImmediate(() => {
    server.listen(port, host, () => {
      consola.ready(
        'Express server listening on http://%s:%d, in %s mode',
        ip,
        port
      )
    })
  })
}
start()

export default app
