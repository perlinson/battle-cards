const express = require('express')
const mongoose = require('mongoose')
const consola = require('consola')
const cors = require('cors')

const { Nuxt, Builder } = require('nuxt')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const config = require('../nuxt.config.js')
require('./api/index')(app)
require('dotenv').config()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

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
  app.use(cors())

  const uri = `mongodb+srv://${process.env.MONGO_ALTA_USER}:${process.env.MONGO_ALTA_PWD}@cluster0.gysem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  mongoose
    .connect(uri)
    .then((result) => {
      app.listen(process.env.PORT || port, host)
      consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
      })
    })
    .catch((err) => {
      consola.error(err)
    })
}
start()
