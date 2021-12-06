import http from 'http'
import { Nuxt, Builder } from 'nuxt'
import consola from 'consola'
import config from '../nuxt.config'
import { mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const app = express(apiRoot, api)
// const server = http.createServer(app)

if (mongo.uri) {
  mongoose.connect(mongo.uri)
}
mongoose.Promise = Promise

export default app
