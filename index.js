require('dotenv').config()

const express = require('express')
const app = express()
const { Nuxt, Builder } = require('nuxt')
const config = require('./nuxt.config.js')

config.dev = process.env.NODE_ENV !== 'production'

async function Init() {
  try {

    const nuxt = new Nuxt(config)

    const PORT = process.env.PORT
    const { host } = nuxt.options.server

    await nuxt.ready()

    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    app.use(nuxt.render)

    app.listen(PORT, host)
    console.log(`Server listening on http://${host}:${PORT}`)
  } catch (err) {
    console.log(`Server init failed..'`, err)
  }
}

Init()