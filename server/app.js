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
  if (!config.dev) {
    config.server = {
      host: '0.0.0.0',
      port: process.env.PORT || 8000,
    }
  }
  const nuxt = new Nuxt(config)
  await nuxt.listen()
  consola.log('nuxt server listening', nuxt.server.options.server)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  consola.log('Nuxt app ready!')
}
start()

export default app
